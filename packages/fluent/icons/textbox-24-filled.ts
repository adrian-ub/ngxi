import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextbox24FilledIcon],svg[fluent-textbox-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25zm-6.75 5.75a.75.75 0 0 1 .102 1.493L14.25 13h-7.5a.75.75 0 0 1-.102-1.493l.102-.007zm-7.5 4h10.5a.75.75 0 0 1 .102 1.493L17.25 17H6.75a.75.75 0 0 1-.102-1.493zm10.5-8a.75.75 0 0 1 .102 1.493L17.25 9H6.75a.75.75 0 0 1-.102-1.493L6.75 7.5z"></svg:path>`,
})
export class FluentTextbox24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
