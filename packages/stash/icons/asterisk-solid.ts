import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskSolidIcon],svg[stash-asterisk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v2.268l1.964-1.134a1 1 0 1 1 1 1.732L14 12l1.964 1.134a1 1 0 0 1-1 1.732L13 13.732V16a1 1 0 1 1-2 0v-2.268l-1.964 1.134a1 1 0 1 1-1-1.732L10 12l-1.964-1.134a1 1 0 1 1 1-1.732L11 10.268V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class StashAsteriskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
