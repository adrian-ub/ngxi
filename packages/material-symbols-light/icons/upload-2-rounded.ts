import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUpload2RoundedIcon],svg[material-symbols-light-upload-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 20h13q.213 0 .356.144t.144.357t-.144.356T18.5 21h-13q-.213 0-.356-.144T5 20.499t.144-.356T5.5 20m4.942-2.77q-.343 0-.575-.231t-.232-.576v-5.98H7.992q-.502 0-.723-.448q-.221-.447.077-.85l4.008-5.293q.121-.161.293-.242T12 3.529t.353.08q.172.082.293.243l3.988 5.292q.299.404.078.851t-.724.447h-1.642v5.981q0 .343-.232.576t-.576.232z"></svg:path>`,
})
export class MaterialSymbolsLightUpload2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
