import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEastRoundedIcon],svg[material-symbols-light-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.117 12.48H3.481q-.213 0-.356-.143q-.144-.144-.144-.357t.144-.356t.356-.143h15.636L14.32 6.677q-.134-.136-.14-.339t.14-.353q.134-.137.341-.137t.348.14l5.427 5.427q.13.131.183.27q.053.14.053.298t-.053.307t-.183.276l-5.427 5.426q-.136.14-.34.14t-.349-.14q-.165-.146-.156-.356q.01-.211.156-.357z"></svg:path>`,
})
export class MaterialSymbolsLightEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
