import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShieldErrorIcon],svg[tdesign-shield-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.67 23.444L12 22.5l.33.944l-.33.116zm.33-2.016l.009-.004a17.8 17.8 0 0 0 3.887-2.215C18.034 17.59 20 15.223 20 12V5.36l-8-2.8l-8 2.8V12c0 3.223 1.966 5.588 4.104 7.21A17.8 17.8 0 0 0 12 21.428m-5.104-.625C4.534 19.012 2 16.127 2 12V3.94l10-3.5l10 3.5V12c0 4.127-2.533 7.012-4.896 8.803a19.8 19.8 0 0 1-4.65 2.595l-.087.033l-.025.009l-.007.002l-.005.002L12 22.5l-.33.944l-.005-.002l-.007-.002l-.025-.01l-.087-.032a18 18 0 0 1-1.39-.606a20 20 0 0 1-3.26-1.989M11 16.5V10h2v6.5zm2-8h-2.004V6.496H13z"></svg:path>`,
})
export class TdesignShieldErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
