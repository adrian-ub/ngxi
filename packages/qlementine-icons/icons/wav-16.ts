import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWav16Icon],svg[qlementine-icons-wav-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 6c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5s.5-.225.5-.5v-3C1 6.225.775 6 .5 6m14 0c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5s.5-.225.5-.5v-3c0-.275-.225-.5-.5-.5m-12-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5s.5-.225.5-.5v-9c0-.275-.225-.5-.5-.5m2 2c-.275 0-.5.225-.5.5v5c0 .275.225.5.5.5s.5-.225.5-.5v-5c0-.275-.225-.5-.5-.5m2 2c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5s.5-.225.5-.5v-1c0-.275-.225-.5-.5-.5m2-2c-.275 0-.5.225-.5.5v5c0 .275.225.5.5.5s.5-.225.5-.5v-5c0-.275-.225-.5-.5-.5m2-4c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5s.5-.225.5-.5v-13c0-.275-.225-.5-.5-.5m2 2c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5s.5-.225.5-.5v-9c0-.275-.225-.5-.5-.5"></svg:path>`,
})
export class QlementineIconsWav16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
