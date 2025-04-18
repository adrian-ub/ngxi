import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons8BitWondersIcon],svg[arcticons-8-bit-wonders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.292 10.464H41.93v4.165H5.292zm.301 6.656h8.6v3.327h-8.6zm0 5.646h8.6v3.327h-8.6zm0 5.665h8.6v3.327h-8.6zm27.799-11.395h8.6v3.327h-8.6zm0 5.731h8.6v3.327h-8.6zm-.001 5.663h8.6v3.327h-8.6zM20.41 17.437h6.25v2.567h-6.25zM5.654 34.329h36.638v4.165H5.654zM20.382 23.16h6.25v2.567h-6.25zm0 5.486h6.25v2.567h-6.25zm6.415-9.526h2.225v4.411h-2.225zm-8.783 0h2.225v4.411h-2.225zm8.718 6.491h2.225v4.411h-2.225zm-8.683 0h2.225v4.411h-2.225z"></svg:path>`,
})
export class Arcticons8BitWondersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
