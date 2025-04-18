import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmergencyExitIcon],svg[streamline-emergency-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.214 1.643c0-.493.4-.893.893-.893h6.25c.493 0 .893.4.893.893v10.714c0 .493-.4.893-.893.893H9.232"></svg:path><svg:path d="M6.553 5.438a1.563 1.563 0 1 0 3.126 0a1.563 1.563 0 1 0-3.126 0m-4.017.669h1.818a1 1 0 0 1 .707.293L7.6 8.94a1 1 0 0 0 .707.292h1.371"></svg:path><svg:path d="M6.107 7.446L3.721 9.832a1 1 0 0 1-.707.293H.75"></svg:path><svg:path d="m4.321 9.232l1.493 1.493a1 1 0 0 1 .293.707v1.818"></svg:path></svg:g>`,
})
export class StreamlineEmergencyExitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
