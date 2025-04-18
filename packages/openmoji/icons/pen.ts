import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPenIcon],svg[openmoji-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="m18.637 51.107l5.036 5.036l-5.359 2.042l-1.699-1.799z"></svg:path><svg:path fill="#d0cfce" stroke="#d0cfce" stroke-miterlimit="10" stroke-width="2" d="M18.033 59.07c7.31-1.718 14.455-7.194 18.033-10.1c5.284-4.29 15.682-15.02 22.025-21.693c2.98-3.137 3.175-7.81.442-10.544l-.488-.487c-2.733-2.733-7.406-2.54-10.543.442c-6.674 6.343-17.402 16.74-21.693 22.024c-2.763 3.403-7.85 10.03-9.82 16.958c-.189.662.02 1.375.506 1.862l1.538 1.538"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="m16.887 57.924l-2.422 2.423m33.45-43.194l9.651 9.65M44.751 14.022c-1.156-1.156-3.143-1.044-4.438.25L27.81 26.777M18.033 59.07c7.31-1.718 14.455-7.194 18.033-10.1c5.284-4.29 15.682-15.02 22.025-21.693c2.98-3.137 3.175-7.81.442-10.544h0l-.488-.487h0c-2.733-2.733-7.406-2.54-10.543.442c-6.674 6.343-17.402 16.74-21.693 22.024c-2.906 3.578-8.382 10.723-10.1 18.034z"></svg:path><svg:path stroke-width="1.961" d="m24.474 55.747l-5.686-5.686"></svg:path></svg:g>`,
})
export class OpenmojiPenIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
