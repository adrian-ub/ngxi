import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormsAppsScriptIcon],svg[material-symbols-light-forms-apps-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20.5q-.213 0-.356-.144t-.144-.357t.144-.356T14 19.5h4.402l-3.589-2.529q-.18-.123-.212-.314t.079-.37t.308-.21t.374.077l3.632 2.504l-1.532-4.131q-.073-.188.025-.378t.286-.262t.39.025t.275.286l1.47 4.13l1.173-4.243q.067-.189.231-.305q.165-.116.353-.05q.189.068.318.233q.128.164.061.353l-1.55 5.8q-.061.176-.191.28T20 20.5zm-10.5-3v-1h1v1zm3 0v-1h5.017q-.017.265-.004.505q.012.24.03.495zm-3-4v-1h1v1zm3 0v-1h7.304q-.287.208-.538.458q-.25.25-.485.542zm-3-4v-1h1v1zm3 0v-1h12v1zm-3-4v-1h1v1zm3 0v-1h12v1z"></svg:path>`,
})
export class MaterialSymbolsLightFormsAppsScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
