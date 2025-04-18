import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSheetsRtlOutlineIcon],svg[material-symbols-light-sheets-rtl-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.212 12.577q-.51 0-.861-.351T5 11.366V3.789q0-.51.351-.861t.86-.351H17.79q.509 0 .86.35q.351.352.351.861v7.578q0 .509-.351.86t-.86.351zM6 7.077h5.5v-3.5H6.462q-.193 0-.327.135Q6 3.846 6 4.037zm6.5 0H18V4.039q0-.193-.134-.327q-.135-.135-.327-.135H12.5zm-1 4.5v-3.5H6v3.039q0 .192.135.326q.134.135.327.135zm1 0h5.039q.192 0 .326-.135q.135-.134.135-.327V8.077h-5.5zM7 20.712l-3.288-3.289L7 14.135l.708.688l-2.075 2.1H19.5v1H5.633l2.075 2.1z"></svg:path>`,
})
export class MaterialSymbolsLightSheetsRtlOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
