import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsColourPalette3Icon],svg[lineicons-colour-palette-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.028 7.227a1.25 1.25 0 1 1 1.768 1.767a1.25 1.25 0 0 1-1.768-1.767m-6.01 7.778a1.25 1.25 0 1 0-1.767 1.768a1.25 1.25 0 0 0 1.767-1.768M7.034 9.369a1.25 1.25 0 1 1-.647 2.415a1.25 1.25 0 0 1 .647-2.415m3.889-1.474a1.25 1.25 0 1 0-.647-2.415a1.25 1.25 0 0 0 .647 2.415"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.023 12c0-5.523 4.478-10 10-10s10 4.477 10 10c0 .735-.607 1.273-1.288 1.273h-3.698a3.004 3.004 0 0 0-2.127 5.125c.54.541.739 1.286.59 1.956a1.87 1.87 0 0 1-1.484 1.447c-.644.13-1.31.199-1.993.199c-5.522 0-10-4.477-10-10m10-8.5a8.5 8.5 0 1 0 1.696 16.831c.189-.038.283-.151.317-.301a.63.63 0 0 0-.188-.573a4.504 4.504 0 0 1 3.19-7.684h3.482A8.5 8.5 0 0 0 12.023 3.5" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsColourPalette3Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
