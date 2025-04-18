import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LockSlashFillIcon],svg[f7-lock-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.649 6.285c4.851 0 8.765 3.586 8.765 10.125v6.024l-10.523.023l18.047 18.07V27.355c0-3.023-1.243-4.593-3.75-4.875v-5.554c0-9.586-6-14.25-12.54-14.25c-5.507 0-10.335 3.328-11.835 9.726l3.14 3.141c.445-6.023 4.008-9.258 8.696-9.258M46.82 52.621a1.81 1.81 0 0 0 2.555 0a1.81 1.81 0 0 0 0-2.555L9.18 9.895a1.84 1.84 0 0 0-2.578 0c-.68.68-.68 1.875 0 2.554Zm-30.796-2.46h23.273q.633 0 1.125-.071l-27-27.024c-1.36.704-2.04 2.086-2.04 4.313v17.883c0 3.375 1.524 4.898 4.641 4.898"></svg:path>`,
})
export class F7LockSlashFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
