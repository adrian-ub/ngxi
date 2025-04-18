import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBadgeSharpIcon],svg[material-symbols-light-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 17.423h5.384v-.142q0-.347-.189-.643q-.19-.296-.518-.438q-.443-.206-.945-.309q-.503-.103-1.04-.103t-1.04.103q-.502.103-.944.309q-.33.142-.519.438q-.19.296-.19.643zM14 15.885h4V15h-4zM8.996 15q.494 0 .845-.347q.351-.346.351-.84t-.346-.847t-.841-.35t-.846.346t-.351.841t.346.846t.841.351M14 13.5h4v-.885h-4zM3 21V8h7V3h4v5h7v13zm8-11.23h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsLightBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
