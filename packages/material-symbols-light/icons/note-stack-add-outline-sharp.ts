import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoteStackAddOutlineSharpIcon],svg[material-symbols-light-note-stack-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21V7.994h13v8.583L16.577 21zm1-1h7l4-4V9H9zm-3.988-2.194L2.752 5.01l12.794-2.259l.504 2.864h-1.012l-.31-1.712L3.905 5.829l1.712 9.63V17.7zM14 18h1v-3h3v-1h-3v-3h-1v3h-3v1h3zm.5-3.5"></svg:path>`,
})
export class MaterialSymbolsLightNoteStackAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
