import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoteAddRoundedIcon],svg[material-symbols-light-note-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h7.213q.331 0 .632.13t.518.349L18.52 7.02q.217.218.348.518t.131.632v11.214q0 .69-.463 1.153T17.385 21zM14 7.2q0 .34.23.57t.57.23H18l-4-4zm-2.5 7.3V17q0 .213.144.356t.357.144t.356-.144T12.5 17v-2.5H15q.213 0 .356-.144t.144-.357t-.144-.356T15 13.5h-2.5V11q0-.213-.144-.356t-.357-.144t-.356.144T11.5 11v2.5H9q-.213 0-.356.144t-.144.357t.144.356T9 14.5z"></svg:path>`,
})
export class MaterialSymbolsLightNoteAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
