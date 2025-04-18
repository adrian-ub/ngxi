import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiBugIcon],svg[gravity-ui-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiBug0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.865.031a.75.75 0 0 1 .918.53l.531 1.981a5.55 5.55 0 0 1 2.384.225a2.5 2.5 0 1 1 3.535 3.535a5.5 5.5 0 0 1 .225 2.384l1.98.53a.75.75 0 0 1-.388 1.45l-1.98-.531q-.271.64-.687 1.188l1.45 1.45a.75.75 0 0 1-1.06 1.06l-1.45-1.45a5.5 5.5 0 0 1-1.188.687l.53 1.98a.75.75 0 1 1-1.448.388l-.531-1.98a5.5 5.5 0 0 1-6.144-6.143l-1.98-.532A.75.75 0 0 1 .95 5.334l1.98.531q.27-.64.687-1.188l-1.45-1.45a.75.75 0 0 1 1.06-1.06l1.45 1.45a5.5 5.5 0 0 1 1.188-.687L5.335.95a.75.75 0 0 1 .53-.919M8 12a4 4 0 1 0-3.309-1.752L8.42 6.52a.75.75 0 0 1 1.06 1.06l-3.728 3.73c.64.435 1.414.69 2.248.69" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiBug0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
