import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteInboxSolidIcon],svg[flowbite-inbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205a2.978 2.978 0 0 1-5.468 0A1.99 1.99 0 0 0 7.442 12H3.198zM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteInboxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
