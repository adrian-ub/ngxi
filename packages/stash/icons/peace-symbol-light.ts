import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPeaceSymbolLightIcon],svg[stash-peace-symbol-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3.514a8.5 8.5 0 0 0-6.45 13.38l6.45-6.451zm1 0v6.929l6.45 6.45a8.5 8.5 0 0 0-6.45-13.38m5.823 14.166L12.5 11.857v8.628a8.48 8.48 0 0 0 5.823-2.805M11.5 20.485v-8.628L5.677 17.68a8.48 8.48 0 0 0 5.823 2.805M2.5 12a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path>`,
})
export class StashPeaceSymbolLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
