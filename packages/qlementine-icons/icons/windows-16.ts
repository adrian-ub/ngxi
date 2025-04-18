import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWindows16Icon],svg[qlementine-icons-windows-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a1 1 0 0 1 .876-.992l12-1.5A1 1 0 0 1 15 2.001v12a1 1 0 0 1-1.124.993l-12-1.5A1 1 0 0 1 1 12.502v-9zm1 5v4l5 .625v-4.62H2zm5-1H2v-4l5-.625v4.62zm1 1v4.75l6 .75V8.5zm6-1H8V2.75L14 2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsWindows16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
