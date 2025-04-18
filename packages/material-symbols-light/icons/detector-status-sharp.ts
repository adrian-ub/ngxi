import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetectorStatusSharpIcon],svg[material-symbols-light-detector-status-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 20.039L8.112 17.2l.713-.688l2.125 2.125l4.225-4.25l.713.713zM7.523 7.768l.646 1.77h7.662l.646-1.77zm-.092 2.77l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769z"></svg:path>`,
})
export class MaterialSymbolsLightDetectorStatusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
