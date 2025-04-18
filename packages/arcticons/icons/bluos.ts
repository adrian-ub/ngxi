import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluosIcon],svg[arcticons-bluos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.771 42.499h21.231s10.993.406 11.253-12.386c.261-12.848-11.253-12.312-11.253-12.312l-15.475.044c-5.144-.135-5.729-3.555-5.747-5.178c-.032-2.806-.055-3.254-.025-7.167"></svg:path><svg:path d="M7.771 5.501h21.231s10.993-.405 11.253 12.386c.261 12.848-11.253 12.312-11.253 12.312l-15.475-.044c-5.144.135-5.729 3.556-5.747 5.178c-.032 2.806-.055 3.254-.025 7.167"></svg:path></svg:g>`,
})
export class ArcticonsBluosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
