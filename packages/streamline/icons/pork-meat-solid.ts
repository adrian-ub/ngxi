import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePorkMeatSolidIcon],svg[streamline-pork-meat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.248.549A.5.5 0 0 0 1.533 1v3.02c0 .159-.08.35-.24.547C.808 5.16.125 6.362.125 8.383c0 1.842.865 3.15 2.18 3.975C3.591 13.165 5.288 13.5 7 13.5c1.71 0 3.408-.335 4.696-1.143c1.314-.824 2.179-2.132 2.179-3.974c0-2.021-.683-3.223-1.168-3.816c-.16-.197-.24-.388-.24-.548V1a.5.5 0 0 0-.715-.451L8.76 1.974l-.03-.006a17 17 0 0 0-.491-.1c-.375-.07-.87-.148-1.238-.148s-.863.078-1.238.148c-.194.037-.366.073-.49.1l-.03.006L2.247.55Zm7.69 8.42c0 1.344-1.316 2.156-2.938 2.156s-2.938-.75-2.938-2.156S5.378 6.813 7 6.813s2.938.812 2.938 2.156M4.188 6.25a.625.625 0 1 1 0-1.25a.625.625 0 0 1 0 1.25m5.625 0a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25M8 9.719a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m-2.625-.625a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePorkMeatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
