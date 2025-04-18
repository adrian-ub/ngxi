import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWand48FilledIcon],svg[fluent-wand-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39 7.25a1.25 1.25 0 1 0-2.5 0V9h-1.75a1.25 1.25 0 0 0 0 2.5h1.75v1.75a1.25 1.25 0 0 0 2.5 0V11.5h1.75a1.25 1.25 0 1 0 0-2.5H39zm-24 4a1.25 1.25 0 1 0-2.5 0V13h-1.75a1.25 1.25 0 0 0 0 2.5h1.75v1.75a1.25 1.25 0 0 0 2.5 0V15.5h1.75a1.25 1.25 0 1 0 0-2.5H15zM33.75 30c.69 0 1.25.56 1.25 1.25V33h1.75a1.25 1.25 0 1 1 0 2.5H35v1.75a1.25 1.25 0 1 1-2.5 0V35.5h-1.75a1.25 1.25 0 0 1 0-2.5h1.75v-1.75c0-.69.56-1.25 1.25-1.25m-1.143-14.596a4.75 4.75 0 0 0-6.717 0l-1.36 1.359l6.718 6.717l1.359-1.358a4.75 4.75 0 0 0 0-6.718m-3.126 9.844l-6.718-6.717L5.396 35.898a4.75 4.75 0 0 0 6.717 6.718z"></svg:path>`,
})
export class FluentWand48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
