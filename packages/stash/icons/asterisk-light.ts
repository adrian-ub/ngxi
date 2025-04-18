import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskLightIcon],svg[stash-asterisk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5a.5.5 0 0 1 .5.5v3.134l2.714-1.567a.5.5 0 1 1 .5.866L13 12l2.714 1.567a.5.5 0 0 1-.5.866L12.5 12.866V16a.5.5 0 1 1-1 0v-3.134l-2.714 1.567a.5.5 0 0 1-.5-.866L11 12l-2.714-1.567a.5.5 0 1 1 .5-.866l2.714 1.567V8a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashAsteriskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
