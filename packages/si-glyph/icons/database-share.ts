import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseShareIcon],svg[si-glyph-database-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.73 6c-.37 0-.668.734-.668 1.54v.977c0 .805.299 1.461.668 1.461H7V14h2V9.978h6.394c.37 0 .606-.656.606-1.461V7.5c.002-.807-.235-1.5-.605-1.5zm13.332 3.031h-1.125V7.969h1.125zM.687 3.972h14.667c.368 0 .667-.665.667-1.485v-.991c0-.82-.299-1.485-.667-1.485H.687C.321.011.021.676.021 1.496v.991c0 .82.299 1.485.666 1.485m12.251-2.003h1v1h-1zM5 15h2v1H5zm-4 0h1.927v.919H1zm8 0h1.958v.938H9zm4 0h1.982v.888H13z"></svg:path>`,
})
export class SiGlyphDatabaseShareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
