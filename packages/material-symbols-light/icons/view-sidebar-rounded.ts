import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewSidebarRoundedIcon],svg[material-symbols-light-view-sidebar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.808 9q-.344 0-.576-.232Q17 8.536 17 8.192V5.808q0-.344.232-.576q.232-.232.576-.232h2.384q.344 0 .576.232q.232.232.232.576v2.384q0 .344-.232.576q-.232.232-.576.232h-2.384Zm0 5q-.344 0-.576-.232q-.232-.232-.232-.576v-2.384q0-.344.232-.576q.232-.232.576-.232h2.384q.344 0 .576.232q.232.232.232.576v2.384q0 .344-.232.576q-.232.232-.576.232h-2.384Zm-14 5q-.344 0-.576-.232Q3 18.536 3 18.192V5.808q0-.344.232-.576Q3.464 5 3.808 5h11.384q.344 0 .576.232q.232.232.232.576v12.384q0 .344-.232.576q-.232.232-.576.232H3.808Zm14 0q-.344 0-.576-.232q-.232-.232-.232-.576v-2.384q0-.344.232-.576q.232-.232.576-.232h2.384q.344 0 .576.232q.232.232.232.576v2.384q0 .344-.232.576q-.232.232-.576.232h-2.384Z"></svg:path>`,
})
export class MaterialSymbolsLightViewSidebarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
