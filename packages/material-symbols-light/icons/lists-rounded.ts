import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListsRoundedIcon],svg[material-symbols-light-lists-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 19q-.44 0-.74-.299t-.299-.74t.3-.739t.739-.299h11.077q.44 0 .739.299q.299.3.299.74t-.299.739t-.74.299zm0-5.962q-.44 0-.74-.299T7.846 12t.3-.74t.739-.298h11.077q.44 0 .739.299T21 12t-.299.74t-.74.298zm0-5.961q-.44 0-.74-.299q-.299-.3-.299-.74t.3-.739T8.884 5h11.077q.44 0 .739.299t.299.74t-.299.739t-.74.299zm-4.846 0q-.441 0-.74-.299Q3 6.478 3 6.038t.299-.739t.74-.299q.44 0 .739.299t.299.74t-.299.739q-.3.299-.74.299m0 5.962q-.44 0-.739-.3T3 12t.299-.74t.74-.298t.739.299t.299.739t-.299.74q-.3.298-.74.298m0 5.962q-.44 0-.739-.299T3 17.961t.299-.739t.74-.299t.739.299q.299.3.299.74t-.299.739t-.74.299"></svg:path>`,
})
export class MaterialSymbolsLightListsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
