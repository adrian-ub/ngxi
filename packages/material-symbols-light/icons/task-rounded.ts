import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTaskRoundedIcon],svg[material-symbols-light-task-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h7.213q.323 0 .628.13t.522.349L18.52 7.02q.217.218.348.522t.131.628v11.214q0 .69-.463 1.153T17.385 21zM14 7.192q0 .349.23.578t.578.23H18l-4-4zm-3.056 8.24L9.16 13.649q-.073-.073-.161-.11t-.18-.036t-.192.036t-.174.11q-.165.165-.165.357t.165.356l1.933 1.939q.13.13.267.184q.137.052.298.052t.298-.052t.268-.184l4.032-4.033q.146-.146.156-.35t-.156-.369t-.36-.165t-.36.165z"></svg:path>`,
})
export class MaterialSymbolsLightTaskRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
