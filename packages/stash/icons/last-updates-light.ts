import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashLastUpdatesLightIcon],svg[stash-last-updates-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.647 9.974L7.65 8.817a.5.5 0 1 1 .5.866l-3.03 1.75a.5.5 0 0 1-.684-.183l-1.75-3.031a.5.5 0 1 1 .866-.5L4.69 9.686a8.5 8.5 0 1 1 2.009 8.158a.5.5 0 1 1 .726-.688a7.5 7.5 0 1 0-1.777-7.182"></svg:path><svg:path fill="currentColor" d="M12.87 7.5a.5.5 0 0 1 .5.5v3.793l1.854 1.853a.5.5 0 0 1-.707.708l-2-2A.5.5 0 0 1 12.37 12V8a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashLastUpdatesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
