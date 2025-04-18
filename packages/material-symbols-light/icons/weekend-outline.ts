import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWeekendOutlineIcon],svg[material-symbols-light-weekend-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.846Q4 7 4.577 6.423T6 5.846h12q.846 0 1.423.577T20 7.846v1.616q.846 0 1.423.577T22 11.462v5q0 .846-.577 1.423T20 18.462H4q-.846 0-1.423-.577T2 16.46v-5q0-.845.577-1.422T4 9.462zm1 0v1.916q.45.252.725.705q.275.454.275.995v2.5h12v-2.5q0-.54.275-.995T19 9.761V7.847q0-.425-.288-.712T18 6.846H6q-.425 0-.712.288T5 7.846m14 7.116H5v-3.5q0-.2-.075-.388t-.213-.325t-.325-.212T4 10.462q-.425 0-.713.287T3 11.462v5q0 .425.287.712t.713.288h16q.425 0 .713-.288t.287-.712v-5q0-.425-.288-.713T20 10.461q-.2 0-.387.076t-.325.212t-.213.325t-.075.388zm-7-1"></svg:path>`,
})
export class MaterialSymbolsLightWeekendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
