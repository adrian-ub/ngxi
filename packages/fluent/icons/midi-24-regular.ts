import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMidi24RegularIcon],svg[fluent-midi-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 4.002a.75.75 0 0 1 .743.648l.007.102v14.5a.75.75 0 0 1-.648.743l-.102.007H2.75a.75.75 0 0 1-.743-.648L2 19.252v-14.5a.75.75 0 0 1 .648-.743l.102-.007zM6 12.5H3.5v6h17v-6H18v3.749a.75.75 0 0 1-1.493.102l-.007-.102V12.5h-2v3.749a.75.75 0 0 1-1.493.102L13 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L9.5 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L6 16.25zm14.5-7h-17V11h17zm-11.25 2a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m8 0a.75.75 0 0 1 .102 1.493L17.25 9h-2.5a.75.75 0 0 1-.102-1.493l.102-.007zm-11-.001a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentMidi24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
