import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTranslatorSolidIcon],svg[bubbles-plugin-translator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 8.75v-3a1.5 1.5 0 0 1 3 0v3m-3-1.5h3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.659 8.659A2.25 2.25 0 0 1 11.25 8h10.5A2.25 2.25 0 0 1 24 10.25v7.5A2.25 2.25 0 0 1 21.75 20H21v3.75a.75.75 0 0 1-1.28.53L15.44 20h-4.19A2.25 2.25 0 0 1 9 17.75v-7.5c0-.597.237-1.169.659-1.591M16.5 10.25a.75.75 0 0 1 .75.75v.75h2.25a.75.75 0 0 1 0 1.5h-.985a11.7 11.7 0 0 1-1.073 2a3.18 3.18 0 0 0 2.109 1.002a.75.75 0 1 1-.102 1.496a4.68 4.68 0 0 1-2.969-1.335c-.756.74-1.746 1.337-2.98 1.337a.75.75 0 0 1 0-1.5c.925 0 1.729-.59 2.389-1.418q.021-.03.045-.057q.165-.212.317-.441a9.5 9.5 0 0 0 .618-1.084H13.5a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.75 13.25l-3 3v-4.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v3"></svg:path></svg:g>`,
})
export class BubblesPluginTranslatorSolidIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
