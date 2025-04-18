import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGeeqIcon],svg[token-geeq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.562 3.563h-1.124V7.5h1.124zm0 12.937h-1.124v3.937h1.124z"></svg:path><svg:path fill="currentColor" d="M12 21a9 9 0 0 0 7.672-13.708l-.846.779a7.875 7.875 0 1 1-.638-.942l.83-.764A8.98 8.98 0 0 0 12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9"></svg:path><svg:path fill="currentColor" d="m18.4 8.462l-.856.788a6.188 6.188 0 1 1-.602-.974l.83-.765A7.3 7.3 0 0 0 12 4.688a7.312 7.312 0 1 0 0 14.625a7.312 7.312 0 0 0 6.402-10.851"></svg:path><svg:path fill="currentColor" d="M12 6.938a5.06 5.06 0 0 1 4.11 2.105l-.837.769a3.938 3.938 0 1 0 .5 3.313h-3.21V12h3.374q-.001-.586-.162-1.12l.899-.827A5.061 5.061 0 1 1 12 6.937"></svg:path>`,
})
export class TokenGeeqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
