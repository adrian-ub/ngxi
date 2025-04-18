import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer3SelectIcon],svg[material-symbols-light-timer-3-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.885 18.116v-1.231h5.384q.27 0 .442-.174t.173-.442v-3.038q0-.27-.172-.442t-.443-.173H4.885v-1.231h5.384q.27 0 .442-.173t.173-.443V7.731q0-.27-.172-.442t-.443-.173H4.885V5.885h5.384q.77 0 1.308.538t.539 1.308v3.054q0 .49-.305.853q-.305.362-.776.362q.47 0 .776.363q.305.362.305.853v3.053q0 .77-.539 1.308t-1.308.539zm10.23 0v-1h4v-2h-3.15q-.344 0-.597-.253t-.253-.597v-2.3q0-.345.253-.598t.597-.253h4.15v1h-4v2h3.15q.345 0 .598.253t.253.597v2.3q0 .344-.253.597t-.597.254z"></svg:path>`,
})
export class MaterialSymbolsLightTimer3SelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
