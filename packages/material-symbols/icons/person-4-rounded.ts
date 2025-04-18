import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPerson4RoundedIcon],svg[material-symbols-person-4-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4t.713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m-8 6v-.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2v.8q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19"></svg:path>`,
})
export class MaterialSymbolsPerson4RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
