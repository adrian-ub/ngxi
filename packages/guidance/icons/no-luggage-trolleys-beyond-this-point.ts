import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoLuggageTrolleysBeyondThisPointIcon],svg[guidance-no-luggage-trolleys-beyond-this-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5.5l23 23M11 7v4m7-4v9m-6-9v-.5a2.5 2.5 0 0 1 5 0V7M7 7h14.5v.176l-.08.369a18.8 18.8 0 0 0 0 7.91l.08.368V16h-14v-.177l.08-.368c.279-1.3.42-2.625.42-3.955v-1m-3.5 11a2 2 0 1 0 4 0m9 0a2 2 0 0 0 3.323 1.5M22 19H4.5v-.497c0-4.646.211-9.938-3.047-13.25C.998 4.79.509 4.5 0 4.5"></svg:path>`,
})
export class GuidanceNoLuggageTrolleysBeyondThisPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
