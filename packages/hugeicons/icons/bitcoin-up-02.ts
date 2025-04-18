import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinUp02Icon],svg[hugeicons-bitcoin-up-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 9a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m8-7l-3.976 3.615c-.717.651-1.075.977-1.497.95c-.422-.026-.737-.393-1.367-1.129l-.507-.59c-.549-.641-.823-.961-1.199-1.013s-.727.182-1.429.65L4 8.5M20 2h-3.5M20 2v3"></svg:path><svg:path d="M10.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M10.438 15.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinUp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
