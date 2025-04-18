import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFontDownloadOffIcon],svg[material-symbols-light-font-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-7.966-7.965l1.22-.207l6.047 6.048q-.211.269-.532.432t-.685.162H4.616q-.672 0-1.144-.472T3 19.385V4.805q0-.095.01-.172t.048-.154L1.887 3.308l.713-.714l19.223 19.223zM21 18.184l-6.611-6.612l-1.954-5.379h-.87l-.67 1.885L5.816 3h13.568q.67 0 1.143.472q.472.472.472 1.144zm-13.562-.606H8.5l1.062-3.012h3.582l-.965-.965h-2.27l.597-1.673l-.744-.744zm4.512-9.75h.1l.77 2.175l-1.21-1.21zm3.55 9.75h1.062l-.578-1.598l-1.62-1.621z"></svg:path>`,
})
export class MaterialSymbolsLightFontDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
