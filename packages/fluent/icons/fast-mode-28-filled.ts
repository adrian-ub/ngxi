import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFastMode28FilledIcon],svg[fluent-fast-mode-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M18.184 5.55l6.555 6.554a4.305 4.305 0 0 1-4.038 7.234v.246A2.415 2.415 0 0 1 18.286 22H15.5v-.826A3.173 3.173 0 0 0 12.335 18h-1.59a.75.75 0 0 0 0 1.5h1.59c.917 0 1.666.75 1.666 1.674V22H7.399A2.401 2.401 0 0 1 5 19.584v-3.15c0-.233.015-.463.043-.69A2.875 2.875 0 1 1 7.55 11.82c.831-.519 1.814-.82 2.868-.82h4.849c.729 0 1.424.144 2.06.404c.197-.332.438-.615.72-.905l-2.406-2.406a1.798 1.798 0 1 1 2.543-2.543z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentFastMode28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
