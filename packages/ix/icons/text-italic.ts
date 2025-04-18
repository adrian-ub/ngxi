import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextItalicIcon],svg[ix-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149.333 448l2.533-17.615l42.554-1.897q7.093-34.687 17.478-104.604l18.491-124.657q13.172-88.345 15.198-115.715l-42.048-1.897L206.072 64h135.261L338.8 81.615l-43.06 1.897q-12.412 72.355-17.985 110.295l-18.237 123.844q-11.399 76.963-14.438 110.837l42.047 1.897L284.594 448z"></svg:path>`,
})
export class IxTextItalicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
