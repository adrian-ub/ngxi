import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAssignmentReturnedSharpIcon],svg[material-symbols-light-assignment-returned-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.308L15.308 12l-.708-.708l-2.1 2.05v-4.65h-1v4.65l-2.1-2.05l-.708.708zM4 20V4h6.316q-.137-.766.366-1.383Q11.184 2 12.01 2t1.328.617T13.685 4H20v16zm8-15.558q.325 0 .538-.212t.212-.538t-.213-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212"></svg:path>`,
})
export class MaterialSymbolsLightAssignmentReturnedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
