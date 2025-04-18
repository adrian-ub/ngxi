import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome16Icon],svg[fluent-color-home-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome160)" d="M6 9h4v5H6z"></svg:path><svg:path fill="url(#fluentColorHome161)" d="M8.687 2.273a1 1 0 0 0-1.374 0l-4.844 4.58A1.5 1.5 0 0 0 2 7.943v4.569a1.5 1.5 0 0 0 1.5 1.5h3v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4h3a1.5 1.5 0 0 0 1.5-1.5v-4.57a1.5 1.5 0 0 0-.47-1.09z"></svg:path><svg:path fill="url(#fluentColorHome162)" fill-rule="evenodd" d="m8.004 2.636l5.731 5.41a.75.75 0 1 0 1.03-1.091L8.86 1.382a1.25 1.25 0 0 0-1.724.007L1.23 7.059a.75.75 0 0 0 1.038 1.082z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome160" x1="8" x2="4.796" y1="9" y2="14.698" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome161" x1="3.145" x2="14.93" y1="1.413" y2="10.981" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome162" x1="10.262" x2="6.945" y1="-.696" y2="7.895" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
