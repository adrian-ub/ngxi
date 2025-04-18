import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAnnoncementMegaphoneIcon],svg[streamline-annoncement-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.182 3.747l3.857 6.681m-.202-.351l-9.51 2.209L.72 11.23L7.386 4.1"></svg:path><svg:path d="m3.396 11.805l.524.906a1.421 1.421 0 1 0 2.455-1.432l-.084-.145m1.153-9.297V.583m4.802 6.057H13.5m-12.111 0h1.253m.519-4.283l.886.887m6.793 0l.886-.887"></svg:path></svg:g>`,
})
export class StreamlineAnnoncementMegaphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
