import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskOutline24pxIcon],svg[healthicons-ppe-mask-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.779 10.304l-2.5-1a.75.75 0 0 0-.557 0l-2.5 1a.75.75 0 0 0 .557 1.392L12 10.808l2.222.888a.75.75 0 0 0 .556-1.392"></svg:path><svg:path fill-rule="evenodd" d="M19 7.342v1.22a3 3 0 0 1 3 3v1.028a3 3 0 0 1-3 3a1.47 1.47 0 0 1-.623 1.192a11.05 11.05 0 0 1-12.755 0A1.47 1.47 0 0 1 5 15.59a3 3 0 0 1-3-3v-1.029a3 3 0 0 1 3-3v-1.22l4.788-1.367A3 3 0 0 1 12 5c.876 0 1.664.375 2.212.974zm-5.88.4l-.382-.417A1 1 0 0 0 12 7a1 1 0 0 0-.738.325l-.382.416L7 8.851v6.45a9.05 9.05 0 0 0 10 0v-6.45zM19 13.59v-3.029a1 1 0 0 1 1 1v1.03a1 1 0 0 1-1 1m-14-3.03v3.03a1 1 0 0 1-1-1v-1.03a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
