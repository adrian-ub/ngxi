import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWebassemblyIcon],svg[openmoji-webassembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12.96 12a.97.97 0 0 0-.965.965v46.07a.97.97 0 0 0 .965.965h46.07a.97.97 0 0 0 .965-.965v-46.07A.97.97 0 0 0 59.03 12h-16.8c-1.801.338-1.804.345-2.472 2.173a4.35 4.35 0 0 1-3.767 2.175a4.35 4.35 0 0 1-3.652-1.986c-.79-2.049-.782-2.055-2.743-2.362z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12.96 12a.97.97 0 0 0-.965.965v46.07a.97.97 0 0 0 .965.965h46.07a.97.97 0 0 0 .965-.965v-46.07A.97.97 0 0 0 59.03 12H40.34a4.348 4.348 0 1 1-8.696 0h-18.69z"></svg:path><svg:path stroke-miterlimit="10" stroke-width="4.456" d="m38.55 38.23l-4.455 15.59l-4.458-15.6l-4.455 15.59l-4.456-15.59" clip-rule="evenodd"></svg:path><svg:g fill-rule="evenodd" stroke-miterlimit="10" stroke-width="2" clip-rule="evenodd"><svg:path d="M0 0h4" transform="matrix(2.138 0 0 2.239 43.22 50.051)"></svg:path><svg:path d="m0 7l-3-7l-3 7" transform="matrix(2.138 0 0 2.239 53.91 38.14)"></svg:path></svg:g></svg:g>`,
})
export class OpenmojiWebassemblyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
