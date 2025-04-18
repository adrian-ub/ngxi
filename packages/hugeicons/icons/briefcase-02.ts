import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase02Icon],svg[hugeicons-briefcase-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.58 8.625c-.071-.59-.106-.885-.057-1.126c.142-.689.748-1.247 1.556-1.434C4.362 6 4.717 6 5.428 6h13.144c.711 0 1.066 0 1.35.065c.807.187 1.413.745 1.555 1.434c.05.241.014.536-.057 1.126c-.162 1.352-.92 2.091-2.369 2.517L14.88 12.37c-1.426.42-2.139.63-2.88.63s-1.454-.21-2.88-.63l-4.171-1.228c-1.448-.426-2.207-1.165-2.37-2.517"></svg:path><svg:path d="m3.463 10.5l-.196 2.276c-.352 4.079-.528 6.119.6 7.421S6.94 21.5 10.824 21.5h2.352c3.885 0 5.828 0 6.957-1.303s.952-3.342.6-7.421l-.196-2.276m-5.037-5l-.077-.265c-.385-1.32-.578-1.98-1.036-2.357S13.32 2.5 12.102 2.5h-.204c-1.218 0-1.827 0-2.285.378c-.458.377-.65 1.037-1.036 2.357L8.5 5.5"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
