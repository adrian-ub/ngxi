import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWristwatchIcon],svg[iconoir-wristwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 16.472V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.528m0-8.944V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.528"></svg:path><svg:path d="M18 12a6 6 0 1 0-12 0a6 6 0 0 0 12 0"></svg:path><svg:path d="M14 12h-2v-2"></svg:path></svg:g>`,
})
export class IconoirWristwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
