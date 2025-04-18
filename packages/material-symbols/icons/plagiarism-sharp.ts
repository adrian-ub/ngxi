import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlagiarismSharpIcon],svg[material-symbols-plagiarism-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.45 17q.45 0 .888-.112t.812-.338L15.6 19l1.4-1.4l-2.45-2.45q.225-.375.338-.812T15 13.45Q15 12 13.975 11T11.5 10t-2.475 1.025T8 13.5t1 2.475T11.45 17m.05-2q-.625 0-1.062-.437T10 13.5t.438-1.062T11.5 12t1.063.438T13 13.5t-.437 1.063T11.5 15M4 22V2h10l6 6v14zm9-13h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsPlagiarismSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
