import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFace3dDraftIcon],svg[iconoir-face-3d-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 7.78v7.796a.6.6 0 0 1-.27.502l-6.616 4.347a.6.6 0 0 1-.249.093l-10.184 1.39A.6.6 0 0 1 2 21.312v-12.3a.6.6 0 0 1 .298-.519l10.789-6.28a.6.6 0 0 1 .688.058l6.01 5.05A.6.6 0 0 1 20 7.78"></svg:path><svg:path d="m2.5 9l10.227 2.922a.6.6 0 0 0 .506-.084L19.5 7.5m-6.5 13V12m3.5 2.01l.01-.011M22 17.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFace3dDraftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
