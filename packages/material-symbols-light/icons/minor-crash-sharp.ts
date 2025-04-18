import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMinorCrashSharpIcon],svg[material-symbols-light-minor-crash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.266L5.711 3.977l.689-.688l2.289 2.288zm8 0l-.688-.689L17.6 3.289l.689.688zm-4.5-1.189v-4h1v4zM4 23v-7.846L6.162 9h11.677L20 15.154V23h-1.23v-2H5.23v2zm1.416-8.846h13.169L17.112 10H6.889zm2.011 4.538q.467 0 .79-.326q.322-.327.322-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.793.321m9.155 0q.466 0 .788-.326q.322-.327.322-.794q0-.466-.326-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.794.321"></svg:path>`,
})
export class MaterialSymbolsLightMinorCrashSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
