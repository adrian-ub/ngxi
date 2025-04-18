import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRaw01Icon],svg[hugeicons-raw-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-.305 20l-.582-2m-3.487 2l1.637-5.632c.062-.214.168-.368.397-.368c.23 0 .336.154.398.368L12.614 20M3.5 22v-2.4m0 0v-2.4c0-.879.063-1.2.814-1.2h1.22c.675 0 1.221.806 1.221 1.8s-.546 1.8-1.22 1.8m-2.035 0h2.035m0 0l.813 2.4m3.366-2h2.9m7.886-4l-.415 4.998c-.035.424-.053.636-.183.676s-.262-.127-.528-.459l-1.06-1.325c-.144-.18-.216-.27-.312-.27s-.168.09-.312.27l-1.06 1.326c-.266.332-.4.498-.529.458c-.13-.04-.147-.251-.183-.675L15.5 16"></svg:path></svg:g>`,
})
export class HugeiconsRaw01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
