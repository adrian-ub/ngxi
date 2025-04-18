import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationAngleupRoundedIcon],svg[material-symbols-text-rotation-angleup-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.025 12.4l-8.6 8.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l8.6-8.6h-.6q-.425 0-.712-.287T16.025 10t.288-.712t.712-.288h3q.425 0 .713.288t.287.712v3q0 .425-.287.713t-.713.287t-.712-.288t-.288-.712zm-10.7-.3l.975 2.1q.125.25.088.513t-.238.462q-.35.35-.8.263t-.65-.513l-4.05-8.95q-.125-.275-.075-.55t.25-.475l.5-.5q.2-.2.475-.25t.55.075l8.975 4.1q.425.2.5.65t-.25.775q-.2.2-.475.25t-.55-.075L11.475 8.95zm-.75-1.55l2.35-2.3l-4.35-2.1l-.05.05z"></svg:path>`,
})
export class MaterialSymbolsTextRotationAngleupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
