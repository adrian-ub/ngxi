import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBounceRightIcon],svg[hugeicons-bounce-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 10c-2.115 3.01-3.105 7.153-3.752 10.086c-.131.596-.197.895-.335.913s-.28-.265-.561-.833C9.006 17.458 6.217 15.062 4 17.108"></svg:path><svg:circle cx="18" cy="5" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsBounceRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
