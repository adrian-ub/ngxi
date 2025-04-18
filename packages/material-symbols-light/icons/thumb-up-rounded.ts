import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbUpRoundedIcon],svg[material-symbols-light-thumb-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.385 9q.627 0 1.12.494T22 10.616v1.23q0 .137-.028.298q-.028.162-.083.298l-2.731 6.474q-.206.461-.693.773q-.486.311-1.003.311H9.269q-.671 0-1.143-.472t-.472-1.144V9.672q0-.323.133-.628t.351-.522l5.156-5.112q.222-.215.494-.27t.516.059t.35.373q.108.258.04.579L13.665 9zM4.615 20q-.67 0-1.143-.472Q3 19.056 3 18.385v-7.77q0-.67.472-1.143Q3.944 9 4.616 9h.423q.67 0 1.143.472q.472.472.472 1.144v7.788q0 .671-.472 1.133Q5.71 20 5.039 20z"></svg:path>`,
})
export class MaterialSymbolsLightThumbUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
