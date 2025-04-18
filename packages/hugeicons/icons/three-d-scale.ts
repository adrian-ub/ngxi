import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDScaleIcon],svg[hugeicons-three-d-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 13l5 4.5M12 13l-5 4.5m5-4.5V8m6.192 8.446c.516-.298.774-.446 1.058-.446s.542.148 1.058.446l.634.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.916.69l-.634.364c-.516.298-.774.446-1.058.446s-.542-.148-1.058-.446l-.634-.364c-.516-.297-.774-.445-.916-.69s-.142-.542-.142-1.136v-.728c0-.594 0-.891.142-1.136s.4-.393.916-.69zm-14.5 0c.516-.298.774-.446 1.058-.446s.542.148 1.058.446l.634.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.916.69l-.634.364c-.516.298-.774.446-1.058.446s-.542-.148-1.058-.446l-.634-.364c-.516-.297-.774-.445-.916-.69S2 19.958 2 19.364v-.728c0-.594 0-.891.142-1.136s.4-.393.916-.69zm7.25-14C11.458 2.149 11.715 2 12 2s.542.149 1.059.446l.633.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.917.69l-.633.364C12.543 7.851 12.285 8 12 8s-.542-.149-1.059-.446l-.633-.364c-.516-.297-.774-.445-.916-.69s-.142-.542-.142-1.136v-.728c0-.594 0-.891.142-1.136s.4-.393.917-.69z" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeDScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
