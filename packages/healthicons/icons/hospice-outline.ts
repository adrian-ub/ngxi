import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospiceOutlineIcon],svg[healthicons-hospice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M41.708 23.794L24.058 6.086L6.294 23.792a1 1 0 0 0 1.412 1.416L10 22.922V41a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V22.907l2.292 2.299a1 1 0 0 0 1.416-1.412M24.053 8.914L36 20.9V40H12V20.928z" clip-rule="evenodd"></svg:path><svg:path d="M16 25.517C16 22.655 17.794 20 20.25 20c1.704 0 2.97 1.191 3.75 2.88c.78-1.689 2.045-2.88 3.75-2.88c2.456 0 4.25 2.655 4.25 5.517C32 31.644 24 36 24 36s-5.389-2.756-7.32-7.278a9 9 0 0 1-.36-1a8 8 0 0 1-.32-2.205"></svg:path></svg:g>`,
})
export class HealthiconsHospiceOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
