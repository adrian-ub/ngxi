import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAdd1Icon],svg[streamline-add-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13M.5 6.96h13"></svg:path>`,
})
export class StreamlineAdd1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddBellNotificationIcon],svg[streamline-add-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 13.5h2M5.09 2.1A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5V9m.5-8.5v6m-3-3h6"></svg:path>`,
})
export class StreamlineAddBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddCircleIcon],svg[streamline-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M7 4v6M4 7h6"></svg:path>`,
})
export class StreamlineAddCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddLayer2Icon],svg[streamline-add-layer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5.5h9a1 1 0 0 1 1 1v9M5.5 6v5M8 8.5H3"></svg:path></svg:g>`,
})
export class StreamlineAddLayer2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddSquareIcon],svg[streamline-add-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4v6M4 7h6m.5-6.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path>`,
})
export class StreamlineAddSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAdobeIcon],svg[streamline-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.233.816L.816 13.183H7.75l-.884-2.65H5.157L7 4.965l2.975 8.218h3.208L8.766.816z"></svg:path><svg:path d="M.816.816h12.367v12.367H.816z"></svg:path></svg:g>`,
})
export class StreamlineAdobeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiChipSparkIcon],svg[streamline-ai-chip-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.833H.679m12.642 0H11.5m-9-3.666H.679m12.642 0H11.5M5.167 2.5V.679m0 12.642V11.5m3.666-9V.679m0 12.642V11.5m1.667-9h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M4.667 7.25c-.281-.048-.281-.452 0-.501a2.55 2.55 0 0 0 2.05-1.964l.018-.078c.06-.278.457-.28.52-.002l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.049.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077A2.55 2.55 0 0 0 4.667 7.25"></svg:path></svg:g>`,
})
export class StreamlineAiChipSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAffordableAndCleanEnergyIcon],svg[streamline-affordable-and-clean-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.862.858v.644m0 3.194v1.535m0 5.991v.644M.859 6.862h.643m10.721 0h.643M11.15 2.574l-.428.428m-7.72 7.719l-.428.428m0-8.575l.428.428m7.72 7.719l.428.428M3 6.862a3.861 3.861 0 1 0 7.722 0a3.861 3.861 0 1 0-7.722 0"></svg:path><svg:path d="M5.45 5.779a1.764 1.764 0 1 0 2.823 0"></svg:path></svg:g>`,
})
export class StreamlineAffordableAndCleanEnergyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiCloudSparkIcon],svg[streamline-ai-cloud-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 9.534a3 3 0 0 1-1.395-.692a3.193 3.193 0 0 1 1.887-5.59a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.173 5.35"></svg:path><svg:path d="M4.528 11.096c-.298-.052-.298-.48 0-.532A2.7 2.7 0 0 0 6.7 8.483l.02-.083c.065-.295.484-.297.551-.003l.022.096a2.71 2.71 0 0 0 2.18 2.069c.299.052.299.482 0 .534a2.71 2.71 0 0 0-2.18 2.069l-.022.096c-.067.294-.486.292-.55-.003l-.019-.082a2.7 2.7 0 0 0-2.173-2.081Z"></svg:path></svg:g>`,
})
export class StreamlineAiCloudSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEditSparkIcon],svg[streamline-ai-edit-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.926 13.202l-3 .26l.26-3l6.24-6.2a1 1 0 0 1 1.43 0l1.27 1.28a1 1 0 0 1 0 1.42zM.842 3.972c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 3.4.896l.021-.097c.076-.346.57-.349.65-.002l.025.112A3.19 3.19 0 0 0 6.66 3.345c.353.06.353.567 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path>`,
})
export class StreamlineAiEditSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEmailGeneratorSparkIcon],svg[streamline-ai-email-generator-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.076 9.546h-3.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5"></svg:path><svg:path d="m.576 1.806l6 4.24l6-4.24m-5.236 8.84c-.351-.06-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.096c.076-.347.57-.35.649-.003l.026.112a3.19 3.19 0 0 0 2.565 2.436c.353.061.353.568 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiEmailGeneratorSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGamingSparkIcon],svg[streamline-ai-gaming-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.312 7.003v2.311m1.155-1.155h-2.31m1.909-3.632H4.15a3 3 0 0 0-2.981 2.669l-.412 3.71a2.283 2.283 0 0 0 4.31 1.273l.36-.72h2.971l.36.72a2.283 2.283 0 0 0 4.31-1.274l-.412-3.71"></svg:path><svg:path d="M8.644 8.736a.248.248 0 1 1 .496 0m-.495 0a.248.248 0 1 0 .495 0M7.175 3.994c-.351-.062-.351-.565 0-.626A3.18 3.18 0 0 0 9.733.918L9.754.82c.076-.347.57-.35.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.061.353.568 0 .63A3.19 3.19 0 0 0 10.43 6.43l-.026.112c-.079.346-.573.344-.649-.003l-.02-.096a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiGamingSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateLandscapeImageSparkIcon],svg[streamline-ai-generate-landscape-image-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.576 6.733a6.5 6.5 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5"></svg:path><svg:path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5"></svg:path><svg:path d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.014 4.934c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateLandscapeImageSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateMusicSparkIcon],svg[streamline-ai-generate-music-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.12 13.462a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193m7.186-1.597a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193"></svg:path><svg:path d="M3.717 11.865V5.383a.4.4 0 0 1 .296-.384l1.26-.361M3.717 7.474l4.06-1.128m3.125 3.923V8.86m-3.51-4.888c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.951.896l.021-.097c.076-.347.57-.349.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.347-.573.344-.649-.002l-.021-.097a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateMusicSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGeneratePortraitImageSparkIcon],svg[streamline-ai-generate-portrait-image-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.77 8.286A3.5 3.5 0 0 1 5.577 6.88c.818 0 1.57.28 2.166.75"></svg:path><svg:path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M5.576 5.379a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.764 5.184c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGeneratePortraitImageSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateVariationSparkIcon],svg[streamline-ai-generate-variation-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.28 8.231H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488Zm7.589 0h-4.15a.49.49 0 0 0-.488.488v4.15c0 .27.218.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488M5.28.643H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488V1.13a.49.49 0 0 0-.488-.488Zm2.866 2.941c-.301-.052-.301-.483 0-.536A2.72 2.72 0 0 0 10.337.95l.018-.083c.065-.297.488-.3.556-.003l.022.097a2.735 2.735 0 0 0 2.197 2.086c.302.052.302.486 0 .539a2.735 2.735 0 0 0-2.197 2.086l-.022.096c-.068.297-.49.295-.556-.002l-.018-.083a2.72 2.72 0 0 0-2.191-2.099"></svg:path>`,
})
export class StreamlineAiGenerateVariationSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNavigationSparkIcon],svg[streamline-ai-navigation-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.519 6.746a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0"></svg:path><svg:path d="M9.629 8.74c-.948 2.542-3.366 4.756-4.36 4.756c-1.25 0-4.75-3.5-4.75-6.75a4.75 4.75 0 0 1 5.19-4.73M7.696 3.77c-.334-.059-.334-.538 0-.596a3.02 3.02 0 0 0 2.433-2.33l.02-.092c.072-.33.542-.331.617-.002l.024.107a3.04 3.04 0 0 0 2.44 2.316c.335.058.335.54 0 .598a3.04 3.04 0 0 0-2.44 2.316l-.024.107c-.075.329-.545.327-.617-.003l-.02-.092a3.02 3.02 0 0 0-2.433-2.33Z"></svg:path></svg:g>`,
})
export class StreamlineAiNavigationSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNetworkSparkIcon],svg[streamline-ai-network-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.512 7.463a6 6 0 1 1-6-6m-6 6h6.923"></svg:path><svg:path d="M6.512 1.463a10.36 10.36 0 0 0-2.308 6a10.36 10.36 0 0 0 2.308 6a10.36 10.36 0 0 0 2.142-4.615"></svg:path><svg:path d="M7.404 3.97c-.35-.06-.35-.564 0-.625A3.18 3.18 0 0 0 9.963.895l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.65-.003l-.02-.096a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiNetworkSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiPromptSparkIcon],svg[streamline-ai-prompt-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.02 3.485h-3.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4m-11-2.5h6.5"></svg:path><svg:path d="m3.02 10.985l1.5-1.5l-1.5-1.5m3 3h1.5m-.124-7.036c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.955.873l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.026.112c-.079.346-.572.344-.648-.003L9.955 6.4a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiPromptSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiRedoSparkIcon],svg[streamline-ai-redo-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.04 13.448v-2.48h2.48"></svg:path><svg:path d="M13.339 5.815a6.449 6.449 0 0 1-11.3 5.308M.661 8.185a6.449 6.449 0 0 1 11.3-5.308"></svg:path><svg:path d="M11.96.552v2.48H9.48M4.09 7.334c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.061.353.568 0 .63A3.19 3.19 0 0 0 7.344 9.77l-.026.112c-.079.346-.573.344-.649-.003l-.02-.096a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiRedoSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiScienceSparkIcon],svg[streamline-ai-science-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.022 4.347a18.5 18.5 0 0 0-1.93 1.686C1.248 8.877-.192 12.046.874 13.113c1.066 1.066 4.236-.375 7.079-3.218a18.5 18.5 0 0 0 1.686-1.931"></svg:path><svg:path d="M9.639 7.964c1.677 2.226 2.36 4.32 1.532 5.148c-1.067 1.067-4.236-.374-7.08-3.217C1.249 7.05-.191 3.882.875 2.815c.828-.827 2.922-.144 5.148 1.532"></svg:path><svg:path d="M5.522 7.964a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m2.51-4.354c-.315-.055-.315-.506 0-.56a2.84 2.84 0 0 0 2.29-2.193L10.34.77c.068-.31.51-.312.58-.003l.024.101a2.86 2.86 0 0 0 2.296 2.18c.316.055.316.509 0 .563a2.86 2.86 0 0 0-2.296 2.18l-.024.101c-.07.31-.512.308-.58-.002l-.02-.087A2.84 2.84 0 0 0 8.03 3.61Z"></svg:path></svg:g>`,
})
export class StreamlineAiScienceSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiSettingsSparkIcon],svg[streamline-ai-settings-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.92 2.57h-.687a.84.84 0 0 0-.78.537l-.36.93l-1.24.703l-.988-.15a.84.84 0 0 0-.838.41l-.335.587a.84.84 0 0 0 .067.946l.628.78V8.72l-.611.78a.84.84 0 0 0-.067.946l.335.586a.84.84 0 0 0 .838.411l.988-.15l1.223.703l.36.93a.84.84 0 0 0 .78.536h.704a.84.84 0 0 0 .779-.536l.36-.93l1.223-.704l.989.151a.84.84 0 0 0 .838-.41l.335-.587a.84.84 0 0 0-.067-.947l-.629-.779v-.907m-5.864.203a1.676 1.676 0 1 0 3.351 0a1.676 1.676 0 0 0-3.351 0M8.1 3.542c-.306-.053-.306-.494 0-.547A2.78 2.78 0 0 0 10.34.85l.018-.085c.067-.303.499-.305.568-.002l.023.098a2.79 2.79 0 0 0 2.244 2.131c.309.054.309.497 0 .55a2.79 2.79 0 0 0-2.244 2.131l-.023.099c-.069.303-.501.3-.568-.003l-.018-.084a2.78 2.78 0 0 0-2.238-2.144Z"></svg:path>`,
})
export class StreamlineAiSettingsSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiTechnologySparkIcon],svg[streamline-ai-technology-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.406 7.97c-.386.44-.856.8-1.385 1.061v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.5A4.5 4.5 0 0 1 6.875.9M3.021 13.5h4"></svg:path><svg:path d="M7.395 3.934c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 9.953.858L9.974.76c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.65 6.37l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiTechnologySparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiUpscaleSparkIcon],svg[streamline-ai-upscale-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 12.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12m4.24-1.76l2.76 2.76"></svg:path><svg:path d="M3.45 6.828c-.368-.064-.368-.592 0-.656a3.33 3.33 0 0 0 2.68-2.568l.022-.101c.08-.364.597-.366.68-.003l.027.118A3.35 3.35 0 0 0 9.55 6.17c.37.065.37.595 0 .66a3.35 3.35 0 0 0-2.69 2.552l-.027.118c-.083.363-.6.36-.68-.003l-.022-.1a3.33 3.33 0 0 0-2.681-2.57Z"></svg:path></svg:g>`,
})
export class StreamlineAiUpscaleSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiVehicleSpark1Icon],svg[streamline-ai-vehicle-spark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.513 4.963H4.77a1 1 0 0 0-1 .68L3 7.963H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H2m10-4h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 13.463a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m5.499-1.5H5M7.416 3.97c-.351-.06-.351-.564 0-.625A3.18 3.18 0 0 0 9.974.895l.022-.097c.075-.347.57-.349.648-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.565 2.435l-.026.112c-.079.347-.572.344-.648-.002l-.022-.097a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiVehicleSpark1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneIcon],svg[streamline-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.25 2.75h1.61a.49.49 0 0 1 .48.38l.51 2l5-1a3.69 3.69 0 0 1 4.4 3.59a1 1 0 0 1-1 1h-4.4l-1 1.58a2 2 0 0 1-1.68.92h-1.1a.5.5 0 0 1-.44-.73l.88-1.74H1.75a1 1 0 0 1-1-1v-4.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineAirplaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneDisabledIcon],svg[streamline-airplane-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.146 13.274L7 12.345l-2.146.93a.99.99 0 0 1-1.035-1.664L5.72 10L5.5 7.97l-3.637.821a.989.989 0 0 1-.665-1.846l1.916-.972M13.5 13.5L.5.5M5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.268a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.268L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.969l-.052.48"></svg:path>`,
})
export class StreamlineAirplaneDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneEnabledIcon],svg[streamline-airplane-enabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.267a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.267L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.97L8.281 10l1.9 1.61a.991.991 0 0 1-1.035 1.664L7 12.344l-2.146.93a.99.99 0 0 1-1.035-1.665L5.72 10L5.5 7.969l-3.637.821a.989.989 0 0 1-.665-1.846z"></svg:path>`,
})
export class StreamlineAirplaneEnabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneIcon],svg[streamline-airport-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.33 10.67H1.88a1.45 1.45 0 0 1 0-2.89h2.3L5.66 6.3L1.6 3.8a1.45 1.45 0 0 1-.52-1.91a1.47 1.47 0 0 1 2-.77l5.3 2.45L10.94.98a1.47 1.47 0 1 1 2.08 2.08l-2.59 2.56l2.45 5.35a1.46 1.46 0 0 1-.77 1.95a1.45 1.45 0 0 1-1.91-.52L7.7 8.34L6.22 9.82v2.3a1.45 1.45 0 0 1-2.89 0z"></svg:path>`,
})
export class StreamlineAirportPlaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneTransitIcon],svg[streamline-airport-plane-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.246 6.417l.71-.365a.257.257 0 0 1 .349.086l.67.764l2.77-1.94a1.882 1.882 0 0 1 2.801.547a.515.515 0 0 1-.242.686l-1.677.775l-.185.089l-.38 2.07a.27.27 0 0 1-.153.214L6.89 9.9a.28.28 0 0 1-.406-.26l.249-1.67l-.122.057l-1.814.904a.506.506 0 0 1-.681-.213l-.98-1.971a.257.257 0 0 1 .11-.33m-1.241 7.076v-2.497h2.498"></svg:path><svg:path d="M13.383 5.807A6.494 6.494 0 0 1 2.005 11.15M.617 8.193a6.494 6.494 0 0 1 11.378-5.345"></svg:path><svg:path d="M11.995.507v2.497H9.497"></svg:path></svg:g>`,
})
export class StreamlineAirportPlaneTransitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportSecurityIcon],svg[streamline-airport-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.433a1 1 0 0 1-.72 0A9.565 9.565 0 0 1 .505 4.498V1.499a1 1 0 0 1 1-.999h10.993a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1-6.137 8.935Z"></svg:path><svg:path d="m3.059 4.55l.826-.282a.28.28 0 0 1 .364.149l.603.934l3.306-1.653A2.058 2.058 0 0 1 11.1 4.739a.563.563 0 0 1-.372.703L8.79 6.01l-.215.066l-.744 2.178a.3.3 0 0 1-.198.207L6.439 8.9a.306.306 0 0 1-.397-.347l.537-1.765l-.14.041l-2.107.686a.554.554 0 0 1-.703-.339l-.744-2.289a.28.28 0 0 1 .174-.339Z"></svg:path></svg:g>`,
})
export class StreamlineAirportSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlarmClockIcon],svg[streamline-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M.5 2.5A8.7 8.7 0 0 1 3 .5m10.5 2a8.7 8.7 0 0 0-2.5-2"></svg:path><svg:path d="M7 5v3h2.5"></svg:path></svg:g>`,
})
export class StreamlineAlarmClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlienIcon],svg[streamline-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5c0 3.59-2.95 8-6.5 8S.5 9.09.5 5.5S3.41.5 7 .5s6.5 1.41 6.5 5"></svg:path><svg:path d="M2.75 4.75a3.12 3.12 0 0 0 .49 2.44a3.12 3.12 0 0 0 2.44.49a3.12 3.12 0 0 0-.49-2.44a3.12 3.12 0 0 0-2.44-.49m8.5 0a3.12 3.12 0 0 1-.49 2.44a3.12 3.12 0 0 1-2.44.49a3.12 3.12 0 0 1 .49-2.44a3.12 3.12 0 0 1 2.44-.49"></svg:path></svg:g>`,
})
export class StreamlineAlienIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignBack1Icon],svg[streamline-align-back-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 .5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"></svg:path></svg:g>`,
})
export class StreamlineAlignBack1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignCenterIcon],svg[streamline-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1h13M2 4h10M3.5 7h7m-10 6h13M2 10h10"></svg:path>`,
})
export class StreamlineAlignCenterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignFront1Icon],svg[streamline-align-front-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 13.5h8.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1"></svg:path><svg:path d="M.5 10.5v-9a1 1 0 0 1 1-1h9"></svg:path></svg:g>`,
})
export class StreamlineAlignFront1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignLeftIcon],svg[streamline-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1h13M.5 4h10M.5 7h7m-7 6h13m-13-3h10"></svg:path>`,
})
export class StreamlineAlignLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignRightIcon],svg[streamline-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H.5m13 3h-10m10 3h-7m7 6H.5m13-3h-10"></svg:path>`,
})
export class StreamlineAlignRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAltIcon],svg[streamline-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.207.793a1 1 0 0 1 .293.707v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 .707.293m-2.76 4.412v3.59M9.25 5.205h2.394"></svg:path><svg:path d="M6.747 5.205v3.59h2.095m-6.592 0l1.102-3.307a.415.415 0 0 1 .394-.283v0c.179 0 .337.114.394.283l1.102 3.307M2.649 7.598h2.194"></svg:path></svg:g>`,
})
export class StreamlineAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmazonIcon],svg[streamline-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.469 6.777c0 1.046-1.06 1.893-2.367 1.893c-1.308 0-2.368-.847-2.368-1.893s1.06-1.894 2.368-1.894h2.367"></svg:path><svg:path d="M3.734 2.988c0-1.046 1.06-1.894 2.368-1.894s2.367.848 2.367 1.894v4.018c.082.403.42 1.25 1.11 1.415M.84 10.061c1.135 1.03 3.57 1.996 6.6 1.848s5.179-1.338 5.874-1.914"></svg:path><svg:path d="M10.545 9.495c1.178-.423 2.78.33 2.78.33s-.08 1.769-1.005 2.613"></svg:path></svg:g>`,
})
export class StreamlineAmazonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmbulanceIcon],svg[streamline-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.159 10.773V4a1 1 0 0 0-1-1H1.702a1 1 0 0 0-1 1v6.626a1 1 0 0 0 1 1h.787m10.809-3.894H9.16"></svg:path><svg:path d="M11.638 11.626h.682a1 1 0 0 0 1-1.008l-.024-3.18l-1.392-2.85a1 1 0 0 0-.899-.562h-1.86m-6.643 7.63a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0"></svg:path><svg:path d="M8.839 11.656a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0M3.431 7H6.43m-1.5-1.499v2.998m3.909 3.127H5.294"></svg:path></svg:g>`,
})
export class StreamlineAmbulanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmpersandIcon],svg[streamline-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z"></svg:path>`,
})
export class StreamlineAmpersandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnchorIcon],svg[streamline-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 8H1.5a5.5 5.5 0 0 0 11 0H11M7 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v10m-1.5-7h3"></svg:path>`,
})
export class StreamlineAnchorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAndroidIcon],svg[streamline-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 13.5v-8a4 4 0 0 1 8 0v8M3 11h8"></svg:path><svg:path d="M.5 10V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2M11 .5L9.28 2.22M3 .5l1.72 1.72"></svg:path></svg:g>`,
})
export class StreamlineAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnnoncementMegaphoneIcon],svg[streamline-annoncement-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.182 3.747l3.857 6.681m-.202-.351l-9.51 2.209L.72 11.23L7.386 4.1"></svg:path><svg:path d="m3.396 11.805l.524.906a1.421 1.421 0 1 0 2.455-1.432l-.084-.145m1.153-9.297V.583m4.802 6.057H13.5m-12.111 0h1.253m.519-4.283l.886.887m6.793 0l.886-.887"></svg:path></svg:g>`,
})
export class StreamlineAnnoncementMegaphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppStoreIcon],svg[streamline-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.805 12.584a.977.977 0 0 0 1.791.247l.21-.36m3.112-3.035H5.566l1.444-2.49l1.938-3.342a.977.977 0 0 0-1.69-.98l-.248.427l-.247-.427a.977.977 0 1 0-1.69.98l.808 1.394l-2.574 4.438H1.602a.977.977 0 1 0 0 1.954H7.75"></svg:path><svg:path d="m8.939 6.324l1.775 3.113h1.556a.977.977 0 0 1 0 1.954h-.423l.268.461a.977.977 0 1 1-1.69.98L7.939 8.575"></svg:path></svg:g>`,
})
export class StreamlineAppStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppleIcon],svg[streamline-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.182 7.49a2.49 2.49 0 0 1 1.737-2.366a2.906 2.906 0 0 0-4.214-.999a1 1 0 0 1-.999 0a3.086 3.086 0 0 0-4.404 1.208a5.12 5.12 0 0 0-.54 3.356A7.24 7.24 0 0 0 3.7 12.893a2.09 2.09 0 0 0 2.697.15a1.32 1.32 0 0 1 1.568 0a2.06 2.06 0 0 0 2.656-.06a6.57 6.57 0 0 0 1.698-2.996a2.476 2.476 0 0 1-2.137-2.497M8.184 1.998L9.682.5"></svg:path>`,
})
export class StreamlineAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineApplicationAddIcon],svg[streamline-application-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5.75-2V.5M8 3.25h5.5"></svg:path>`,
})
export class StreamlineApplicationAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArchiveBoxIcon],svg[streamline-archive-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm12-1V2a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1m-8 4h3"></svg:path>`,
})
export class StreamlineArchiveBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendLeftDown2Icon],svg[streamline-arrow-bend-left-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 10.5l3 3l3-3"></svg:path><svg:path d="M11.5.5h-2a4 4 0 0 0-4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendLeftDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendRightDown2Icon],svg[streamline-arrow-bend-right-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 10.5l-3 3l-3-3"></svg:path><svg:path d="M2.5.5h2a4 4 0 0 1 4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendRightDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverDownIcon],svg[streamline-arrow-crossover-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13m0-4v4h-4M5 9L.5 13.5m0-4v4h4M9 5L13.5.5"></svg:path>`,
})
export class StreamlineArrowCrossoverDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverLeftIcon],svg[streamline-arrow-crossover-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m4 0h-4v-4M5 5L.5.5m4 0h-4v4M9 9l4.5 4.5"></svg:path>`,
})
export class StreamlineArrowCrossoverLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverRightIcon],svg[streamline-arrow-crossover-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-4 0h4v4M9 9l4.5 4.5m-4 0h4v-4M5 5L.5.5"></svg:path>`,
})
export class StreamlineArrowCrossoverRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverUpIcon],svg[streamline-arrow-crossover-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m0 4v-4h4M9 5L13.5.5m0 4v-4h-4M5 9L.5 13.5"></svg:path>`,
})
export class StreamlineArrowCrossoverUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor1Icon],svg[streamline-arrow-cursor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 10.5l-4-4l2-2a1.001 1.001 0 0 0-.5-1.68L1.74.53A1 1 0 0 0 .53 1.74L2.82 11a1 1 0 0 0 1.68.46l2-2l4 4z"></svg:path>`,
})
export class StreamlineArrowCursor1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor2Icon],svg[streamline-arrow-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.005 5.428c.157-.065.257-.094.35-.186a.494.494 0 0 0 0-.7c-.093-.092-.124-.147-.35-.214C12.78 4.262 1.81.554 1.81.554A.99.99 0 0 0 .553 1.809S4.35 12.856 4.396 13.006s.106.257.199.35a.495.495 0 0 0 .7 0c.092-.093.113-.146.183-.35l1.94-5.594s5.431-1.919 5.587-1.984"></svg:path>`,
})
export class StreamlineArrowCursor2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown1Icon],svg[streamline-arrow-curvy-up-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11L3 13.5v-11a2 2 0 1 1 4 0v9a2 2 0 0 0 4 0V.5L13.5 3"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown2Icon],svg[streamline-arrow-curvy-up-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.385 2.958v8.084a2.193 2.193 0 0 1-4.385 0V2.958a2.192 2.192 0 1 0-4.385 0v8.084"></svg:path><svg:path d="m9.385 4.868l2-2l2 2M4.615 9.07l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineArrowCurvyUpDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDown2Icon],svg[streamline-arrow-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6.5l3 3l3-3m-3-6v9m-3.5 4h7"></svg:path>`,
})
export class StreamlineArrowDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDownDashedSquareIcon],svg[streamline-arrow-down-dashed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.705 13.394a3 3 0 0 1-2.07-2m10.66 2a3 3 0 0 0 2.07-2M6 13.5h2m0-13H6M.5 6v2m13-2v2M2.705.606a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M7 4v6M5 8l2 2l2-2"></svg:path>`,
})
export class StreamlineArrowDownDashedSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowExpandIcon],svg[streamline-arrow-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5l5-5m-4 0h4v4m-8 1l-5-5m4 0h-4v4m8 4l5 5m-4 0h4v-4m-8-1l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineArrowExpandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowInfiniteLoopIcon],svg[streamline-arrow-infinite-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.43a2.37 2.37 0 0 1-1.5.57A2.75 2.75 0 0 1 .65 9.192C.511 8.811.5 8 .5 8s.012-.81.15-1.192A2.75 2.75 0 0 1 3.5 5c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 2.85-1.808C13.489 8.811 13.5 8 13.5 8s-.012-.81-.15-1.192A2.75 2.75 0 0 0 10.5 5h-2l2-2"></svg:path>`,
})
export class StreamlineArrowInfiniteLoopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowMoveIcon],svg[streamline-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 2.5l2-2l2 2m-4 9l2 2l2-2M7 .5v13M11.5 5l2 2l-2 2m-9-4l-2 2l2 2m11-2H.5"></svg:path>`,
})
export class StreamlineArrowMoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal1Icon],svg[streamline-arrow-reload-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 .5L11.5 3L9 5.5"></svg:path><svg:path d="M.5 6V4a1 1 0 0 1 1-1h10M5 13.5L2.5 11L5 8.5"></svg:path><svg:path d="M13.5 8v2a1 1 0 0 1-1 1h-10"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadHorizontal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal2Icon],svg[streamline-arrow-reload-horizontal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 8.5L7 10.75L9.25 13m-4.5-7.5L7 3.25L4.75 1"></svg:path><svg:path d="M7 10.75h4.5a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2H10m-3 0H2.5a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2H4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadHorizontal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical1Icon],svg[streamline-arrow-reload-vertical-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5L3 2.5L5.5 5"></svg:path><svg:path d="M6 13.5H4a1 1 0 0 1-1-1v-10M13.5 9L11 11.5L8.5 9"></svg:path><svg:path d="M8 .5h2a1 1 0 0 1 1 1v10"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadVertical1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical2Icon],svg[streamline-arrow-reload-vertical-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.25L3.25 7L1 9.25m7.5-4.5L10.75 7L13 4.75"></svg:path><svg:path d="M3.25 7v4.5a2 2 0 0 0 2 2h3.5a2 2 0 0 0 2-2V10m0-3V2.5a2 2 0 0 0-2-2h-3.5a2 2 0 0 0-2 2V4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadVertical2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoadmapIcon],svg[streamline-arrow-roadmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.643h6.5m-1.857-1.857l1.857 1.857l-1.857 1.857M3.286 1.893a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0M7 6.536a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0m-2.786 5.107a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0"></svg:path><svg:path d="M7 6.536H3.054a2.554 2.554 0 0 0 0 5.107h1.16m5.572-5.107h1.393a2.321 2.321 0 0 0 0-4.643H6.07m-2.784 0H.5"></svg:path></svg:g>`,
})
export class StreamlineArrowRoadmapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundLeftIcon],svg[streamline-arrow-round-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75.5L2.25 3l2.5 2.5"></svg:path><svg:path d="M1.75 8.25A5.25 5.25 0 1 0 7 3H2.25"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundRightIcon],svg[streamline-arrow-round-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.25.5l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M12.25 8.25A5.25 5.25 0 1 1 7 3h4.75"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkIcon],svg[streamline-arrow-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l4-4M1 9.5h3.5V13m9 .5l-4-4m3.5 0H9.5V13M.5.5l4 4M1 4.5h3.5V1m9-.5l-4 4m3.5 0H9.5V1"></svg:path>`,
})
export class StreamlineArrowShrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal1Icon],svg[streamline-arrow-shrink-diagonal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l5-5m-4 0h4v4m8-12l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal2Icon],svg[streamline-arrow-shrink-diagonal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 13.5l-5-5m4 0h-4v4M.5.5l5 5m-4 0h4v-4"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal1Icon],svg[streamline-arrow-transfer-diagonal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 10.5l10-10H6m7.5 3l-10 10H8"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal2Icon],svg[streamline-arrow-transfer-diagonal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5L3.5.5H8m-7.5 3l10 10H6"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal3Icon],svg[streamline-arrow-transfer-diagonal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 8.5l8-8m0 3.5V.5H6m6.5 5l-8 8m0-3.5v3.5H8"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUp1Icon],svg[streamline-arrow-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5M10.5 4L7 .5L3.5 4"></svg:path>`,
})
export class StreamlineArrowUp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUpDashedSquareIcon],svg[streamline-arrow-up-dashed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.705.606a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M6 .5h2m0 13H6M.5 8V6m13 2V6M2.705 13.394a3 3 0 0 1-2.07-2m10.66 2a3 3 0 0 0 2.07-2M7 10V4M5 6l2-2l2 2"></svg:path>`,
})
export class StreamlineArrowUpDashedSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArtificialIntelligenceSparkIcon],svg[streamline-artificial-intelligence-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.433v3.97a2.724 2.724 0 1 1-5.439-.229C.994 9.565.636 8.374.636 7.38c0-1.354.665-2.671 1.617-3.19a2.38 2.38 0 0 1 3.902-2.076"></svg:path><svg:path d="M3.511 5.809c-.35-.08-1.141-.6-1.26-1.612m.039 4.549c-.356.281-.64.917-.731 1.427m5.441.23a2.724 2.724 0 1 0 5.439-.229c.567-.609.924-1.8.924-2.794c0-.434-.068-.864-.192-1.266"></svg:path><svg:path d="M11.71 8.746c.356.281.64.917.731 1.427M7.064 4.307c-.35-.062-.35-.565 0-.626a3.18 3.18 0 0 0 2.559-2.45l.021-.097c.076-.347.57-.35.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.061.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineArtificialIntelligenceSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAscendingNumberOrderIcon],svg[streamline-ascending-number-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.167.5v5M9.5 1.75h.417c.69 0 1.25-.56 1.25-1.25v0m1.667 5H9.5m.922 5.593h.656a1.422 1.422 0 0 0 0-2.843h-.656a1.422 1.422 0 0 0 0 2.843"></svg:path><svg:path d="M12.5 9.562v2.625c0 .725-.588 1.313-1.312 1.313h-.875a1.31 1.31 0 0 1-1.238-.876M6 11l-2.5 2.5L1 11M3.5.5v13"></svg:path></svg:g>`,
})
export class StreamlineAscendingNumberOrderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAsterisk1Icon],svg[streamline-asterisk-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-5.5-10l11 7m-11 0l11-7"></svg:path>`,
})
export class StreamlineAsterisk1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAttributionIcon],svg[streamline-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M5.467 4.073a1.524 1.524 0 1 0 3.048 0a1.524 1.524 0 1 0-3.048 0"></svg:path><svg:path d="m8.301 8.85l-.325 2.602H6.024L5.699 8.85h-.65a.325.325 0 0 1-.326-.326v-.65a2.277 2.277 0 1 1 4.554 0v.65c0 .18-.146.326-.326.326z"></svg:path></svg:g>`,
})
export class StreamlineAttributionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAutoFlashIcon],svg[streamline-auto-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.115.59v4.115h2.88l-4.526 6.583V7.173h-2.88L6.114.59Zm1.911 12.656l1.842-5.525a.69.69 0 0 1 .658-.475v0c.299 0 .564.191.658.475l1.842 5.525m-4.333-2h3.666"></svg:path>`,
})
export class StreamlineAutoFlashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackCamera1Icon],svg[streamline-back-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.5A.25.25 0 0 1 7 3m0 .5A.25.25 0 0 0 7 3"></svg:path><svg:path d="M10.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBackCamera1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackpackIcon],svg[streamline-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 3h4a2 2 0 0 1 2 2v8.5H3V5a2 2 0 0 1 2-2M3 13.5H.5v-4a1 1 0 0 1 1-1H3m8 0h1.5a1 1 0 0 1 1 1v4H11m-8-6h8m-4-1v2M5 3v-.5a2 2 0 1 1 4 0V3"></svg:path>`,
})
export class StreamlineBackpackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBacteriaVirusCellsBiologyIcon],svg[streamline-bacteria-virus-cells-biology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.874 11.57c-4.079-2.981-.453-8.944 1.36-9.796c1.45-.681 2.719 0 3.172.426c1.713 1.609-.16 3.36.747 4.638c2.788 3.29-1.338 7.612-5.279 4.732"></svg:path><svg:path d="M6.282 9.257a1.229 1.229 0 1 0 2.458 0a1.229 1.229 0 1 0-2.458 0m.002-4.75a1.005 1.005 0 1 0 2.01 0a1.005 1.005 0 1 0-2.01 0M5.152 7.235a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7.53 1.486V.542M5.945 1.944l-.528-.782m-.626 1.943l-.8-.5m-.184 2.103l-.853-.404m.239 2.136l-.926-.182m.747 1.854l-.943.027m1.312 1.636l-.868.369m1.829.988l-.657.677m2.133.316l-.434.838m2.144.495v-.944m1.797.588l-.408-.851m1.958-.239l-.665-.67m1.718-1.35l-.923-.2m.75-2.042l-.881.34m-.043-1.995l-.88.34m1.113-2.029l-.938-.107m.665-1.813l-.874.356M9.41 1.045l-.531.78"></svg:path></svg:g>`,
})
export class StreamlineBacteriaVirusCellsBiologyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagIcon],svg[streamline-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5c3.5 0 6-1.24 6-4c0-3-1.5-4.52-4.5-6.02l1.298-2.028a.65.65 0 0 0-.56-.95h-4.24a.65.65 0 0 0-.56 1L5.5 3.48C2.5 5 1 6.52 1 9.52c0 2.74 2.5 3.98 6 3.98"></svg:path><svg:path d="M5.5 3.5a1.803 1.803 0 0 0 3 0v0"></svg:path></svg:g>`,
})
export class StreamlineBagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagDollarIcon],svg[streamline-bag-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path><svg:path d="M8.383 6.806a1.08 1.08 0 0 0-1.022-.723h-.838a.967.967 0 0 0-.207 1.912l1.277.28a1.084 1.084 0 0 1-.232 2.142H6.64c-.472 0-.873-.302-1.022-.722M7 6.083V5m0 6.5v-1.083"></svg:path></svg:g>`,
})
export class StreamlineBagDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagPoundIcon],svg[streamline-bag-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.604 6.22s-1.312-.582-2.041.147c-.967.966.437 3.5-1.313 4.083c0 0 1.944.097 3.5 0m-.583-2.042H5.25"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagPoundIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagRupeeIcon],svg[streamline-bag-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.958 6h4.084M4.958 7.604h4.084M6.708 6c.389.097 1.167.438 1.167 1.458c0 1.75-2.334 1.75-2.334 1.75s1.167 1.021 2.917 1.459"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagRupeeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase1Icon],svg[streamline-bag-suitcase-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M5 .5h4a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1M3.5 7h7m-7 3h7"></svg:path>`,
})
export class StreamlineBagSuitcase1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase2Icon],svg[streamline-bag-suitcase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-2.5 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"></svg:path>`,
})
export class StreamlineBagSuitcase2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagYenIcon],svg[streamline-bag-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.25 6L7 8.333L8.75 6M7 8.333v2.625M5.25 8.333h3.5m-3.5 1.458h3.5"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagYenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBaggageIcon],svg[streamline-baggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4h-9a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 1 1 5 0"></svg:path>`,
})
export class StreamlineBaggageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBallIcon],svg[streamline-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-13v13"></svg:path><svg:path d="M2.1 11.27a5 5 0 0 0 0-8.54m9.8 0a5 5 0 0 0 0 8.54"></svg:path></svg:g>`,
})
export class StreamlineBallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBalloonIcon],svg[streamline-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.021 11.27c.205 2.682 2.541 2.356 3.553 1.706c1.712-1.1 2.846-1.385 4.864-1.226M9.04 4.404c0-1.975-1.8-3.779-4.02-3.779S1.002 2.429 1.002 4.404s1.8 4.152 4.018 4.152c2.22 0 4.019-2.178 4.019-4.152Z"></svg:path><svg:path d="m5.048 8.556l-1.25 1.512a.5.5 0 0 0 .386.819h1.693a.5.5 0 0 0 .39-.813z"></svg:path></svg:g>`,
})
export class StreamlineBalloonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBandageIcon],svg[streamline-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.13 7.87l4.74-4.74m-1.74 7.74l4.74-4.74m-3.08 6.39a3.345 3.345 0 0 0 4.73-4.73L6.21 1.48a3.345 3.345 0 0 0-4.73 4.73z"></svg:path>`,
})
export class StreamlineBandageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBankIcon],svg[streamline-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.91 5.5H1.09c-.56 0-.8-.61-.36-.9L6.64.73a.71.71 0 0 1 .72 0l5.91 3.87c.44.29.2.9-.36.9M13 11H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5M2 5.5V11m3.333-5.5V11m3.334-5.5V11M12 5.5V11"></svg:path>`,
})
export class StreamlineBankIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryAlert1Icon],svg[streamline-battery-alert-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zm-7-1V7"></svg:path><svg:path d="M6.5 9.125a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBatteryAlert1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryChargingIcon],svg[streamline-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path><svg:path d="m7.177 4.658l-1.658 2.24h2.168l-1.182 2.13"></svg:path></svg:g>`,
})
export class StreamlineBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty1Icon],svg[streamline-battery-empty-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class StreamlineBatteryEmpty1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty2Icon],svg[streamline-battery-empty-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5h9a1 1 0 0 1 1 1V5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.5v1.5a1 1 0 0 1-1 1M.5.5l13 13m-13-10v7a1 1 0 0 0 1 1h7"></svg:path>`,
})
export class StreamlineBatteryEmpty2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryFull1Icon],svg[streamline-battery-full-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.25 5v4m3-4v4m3-4v4m4.25-3.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class StreamlineBatteryFull1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryLow1Icon],svg[streamline-battery-low-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zM3.25 5v4"></svg:path>`,
})
export class StreamlineBatteryLow1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryMedium1Icon],svg[streamline-battery-medium-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zM3.25 5v4m3-4v4"></svg:path>`,
})
export class StreamlineBatteryMedium1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeachIcon],svg[streamline-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.48H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5m9.5-4a5.49 5.49 0 0 0-8.48 0"></svg:path><svg:path d="M6.5 7.53c.06-2.26.75-4.32 2.25-5.06M5.76.57a2.58 2.58 0 0 1 3 1.9"></svg:path><svg:path d="M12.41 2.84a2.78 2.78 0 0 0-3.66-.37"></svg:path><svg:path d="M5.08 3.54a3 3 0 0 1 3.67-1.07a2.55 2.55 0 0 1 1.89 3"></svg:path></svg:g>`,
})
export class StreamlineBeachIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeanieIcon],svg[streamline-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 10.5h-11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-11 0v-3a5.5 5.5 0 1 1 11 0v3M7 2V.5"></svg:path>`,
})
export class StreamlineBeanieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerMugIcon],svg[streamline-beer-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5h8a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1m9 2.5h2a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-2M3.75 4v5.5M7.25 4v5.5"></svg:path>`,
})
export class StreamlineBeerMugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerPitchIcon],svg[streamline-beer-pitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1h-1.841M2 6.879v4.62a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6.874"></svg:path><svg:path d="M2 6.872a2.25 2.25 0 1 1 1.526-4.235a2.5 2.5 0 0 1 4.948 0A2.25 2.25 0 1 1 9.25 7H5v2a1.5 1.5 0 1 1-3 0z"></svg:path></svg:g>`,
})
export class StreamlineBeerPitchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBicycleBikeIcon],svg[streamline-bicycle-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m8.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m-2-.75l-3-5"></svg:path><svg:path d="M4.953 7.088L2.75 11.25L7 10.5l2.85-3.326m1.4 4.076L8.977 4.628h2.64M3 5.5h2.5"></svg:path></svg:g>`,
})
export class StreamlineBicycleBikeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill1Icon],svg[streamline-bill-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5.5 5h11m-10 2.5h9M2.775 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBill1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill2Icon],svg[streamline-bill-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 2.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4M2.775 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBill2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill4Icon],svg[streamline-bill-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 1.75H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 12.25h9a1 1 0 0 0 1-1v-5M2.525 5.857a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.45.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.75 7a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path></svg:g>`,
})
export class StreamlineBill4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBillCashlessIcon],svg[streamline-bill-cashless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 2.5h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1m-11-8v7a1 1 0 0 0 1 1H9"></svg:path><svg:path d="M5.586 5.586a2 2 0 1 1 2.828 2.828M5.022 7.296a2 2 0 0 0 1.745 1.69M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineBillCashlessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBinanceCircleIcon],svg[streamline-binance-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-3.2.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.4.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.5 5L7 3l2.5 2m-5 4L7 11l2.5-2"></svg:path></svg:g>`,
})
export class StreamlineBinanceCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBitcoinIcon],svg[streamline-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.79 6.45A2.23 2.23 0 0 0 7.83 2H4.39a.81.81 0 0 0-.81.81v8.09a.81.81 0 0 0 .81.81h3.4a2.63 2.63 0 0 0 0-5.26M5.13 2V.5M7.63 2V.5m-2.5 13v-1.79m2.5 1.79v-1.79m.2-5.26H3.58"></svg:path>`,
})
export class StreamlineBitcoinIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankCalendarIcon],svg[streamline-blank-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M.5 5.5h13m-10-5v3m7-3v3M3.5 2h5"></svg:path>`,
})
export class StreamlineBlankCalendarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankNotepadIcon],svg[streamline-blank-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 3.5v-3m3 3v-3m3 3v-3M12.5 2h-11a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBlankNotepadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlockBellNotificationIcon],svg[streamline-block-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 13.5h2M4.48 2.3A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5"></svg:path><svg:path d="M10.25 7a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m2.3-.95l-4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineBlockBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodBagDonationIcon],svg[streamline-blood-bag-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 7.838V3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4.338a3 3 0 0 1-2.051 2.846L9.5 11v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V11l-.949-.316A3 3 0 0 1 1.5 7.838"></svg:path><svg:path d="M1.5 8.039c.667-.444 2.7-1.066 5.5 0c2.8 1.065 4.833.222 5.5-.333M8.118 4.661c0-.63-1.118-2.19-1.118-2.19S5.88 4.032 5.88 4.662c0 .31.118.606.328.825s.494.341.79.341a1.1 1.1 0 0 0 .792-.341a1.2 1.2 0 0 0 .327-.825v0ZM7 12.5v1"></svg:path></svg:g>`,
})
export class StreamlineBloodBagDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDonateDropIcon],svg[streamline-blood-donate-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.021 12.75l-1.914-1.914a2 2 0 0 1-.586-1.414V5.25a1 1 0 0 1 1-1v0a1 1 0 0 1 1 1v3m8.458 4.5l1.914-1.914a2 2 0 0 0 .585-1.414V5.25a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v3"></svg:path><svg:path d="m3.436 10.078l-.707-.707a1 1 0 0 1 1.414-1.414L5.436 9.25a2 2 0 0 1 .585 1.414v2.086m4.543-2.672l.707-.707a1 1 0 0 0-1.414-1.414L8.564 9.25a2 2 0 0 0-.585 1.414v2.086m1.042-7.584c0-1.127-2-3.916-2-3.916s-2 2.79-2 3.916c0 .552.211 1.083.586 1.474c.375.39.884.61 1.414.61s1.04-.22 1.415-.61a2.13 2.13 0 0 0 .585-1.474"></svg:path></svg:g>`,
})
export class StreamlineBloodDonateDropIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDropDonationIcon],svg[streamline-blood-drop-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.092 8.954C2.092 4.308 7 .6 7 .6s4.908 3.708 4.908 8.354c0 3.002-2.486 4.446-4.908 4.446s-4.908-1.444-4.908-4.446"></svg:path><svg:path d="M6.379 6.014a.38.38 0 0 0-.382.382v1.076H4.92a.38.38 0 0 0-.382.382v1.242c0 .212.171.383.382.383h1.076v1.075c0 .211.17.382.382.382H7.62a.38.38 0 0 0 .383-.382V9.479h1.075a.38.38 0 0 0 .382-.383V7.854a.38.38 0 0 0-.382-.382H8.004V6.396a.38.38 0 0 0-.383-.382H6.38Z"></svg:path></svg:g>`,
})
export class StreamlineBloodDropDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothIcon],svg[streamline-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.25 9.5l7.5-5.5l-4-3.5v13l4-3.5l-7.5-5.5"></svg:path>`,
})
export class StreamlineBluetoothIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothDisabledIcon],svg[streamline-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75L10.5 4L6.5.5v5.937M.5.5l13 13M3 9.5l1.875-1.375m3.895 3.389L6.5 13.5V9.31"></svg:path>`,
})
export class StreamlineBluetoothDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSearchingIcon],svg[streamline-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9.5L8.5 4L4.5.5v13l4-3.5L1 4.5m11.033-1c1.9 1.9 1.9 5 0 6.9M10.5 5.305c.859.859.859 2.33 0 3.19"></svg:path>`,
})
export class StreamlineBluetoothSearchingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBombIcon],svg[streamline-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 13.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M13.5.5h-.671a3 3 0 0 0-2.814 1.959L10 2.5m-6.5 5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineBombIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoneIcon],svg[streamline-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.5a2 2 0 1 0-4 0a2 2 0 0 0 .59 1.41L3.91 8.09A2 2 0 0 0 2.5 7.5a2 2 0 1 0 0 4a2 2 0 0 0 4 0a2 2 0 0 0-.59-1.41l4.18-4.18a2 2 0 0 0 1.41.59a2 2 0 0 0 0-4"></svg:path>`,
})
export class StreamlineBoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookReadingIcon],svg[streamline-book-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V8.25A1.25 1.25 0 0 1 8.25 7v0A1.25 1.25 0 0 1 9.5 8.25V11h2a2 2 0 0 1 2 2v.5M6.257 3.095A8.24 8.24 0 0 0 1.51.51a.886.886 0 0 0-1.01.877v7.13a.886.886 0 0 0 .788.886a8.2 8.2 0 0 1 3.9 1.627m1.07-5.172V3.095m4.968 6.307a.886.886 0 0 0 .789-.886v-7.13a.886.886 0 0 0-1.01-.877a8.24 8.24 0 0 0-4.748 2.586"></svg:path>`,
})
export class StreamlineBookReadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookmarkIcon],svg[streamline-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4v-12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"></svg:path>`,
})
export class StreamlineBookmarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowIcon],svg[streamline-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.82s5.107-.928 8.357 2.322s2.322 8.357 2.322 8.357m-8.822-1.856L13.5.5m-2.786 0H13.5v2.786M2.357 2.698V13.5m8.944-1.857H.5"></svg:path>`,
})
export class StreamlineBowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowTieIcon],svg[streamline-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="m6.5 8.94l-4.75 1.23a1 1 0 0 1-1.25-1V4.79a1 1 0 0 1 1.25-1L6.5 5.06m1 3.88l4.75 1.23a1 1 0 0 0 1.25-1V4.79a1 1 0 0 0-1.25-1L7.5 5.06"></svg:path></svg:g>`,
})
export class StreamlineBowTieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoxSignIcon],svg[streamline-box-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-9 10h7"></svg:path><svg:path d="M5.5 8.5v-5l-2 2m5 3v-5l2 2"></svg:path></svg:g>`,
})
export class StreamlineBoxSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracesCircleIcon],svg[streamline-braces-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5c-.39 0-1.083.304-1.133 1.148c-.03.497-.198 1.017-.643 1.24L3.5 7l.224.112c.445.223.613.743.643 1.24c.05.844.743 1.148 1.133 1.148m3-5c.39 0 1.083.304 1.133 1.148c.03.497.198 1.017.643 1.24L10.5 7l-.224.112c-.445.223-.613.743-.643 1.24A1.174 1.174 0 0 1 8.5 9.5"></svg:path><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class StreamlineBracesCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracketIcon],svg[streamline-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 10.5L.5 7L4 3.5m6 7L13.5 7L10 3.5"></svg:path>`,
})
export class StreamlineBracketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrailleBlindIcon],svg[streamline-braille-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.834 13.45l-.394-.664a1.715 1.715 0 0 1 1.157-2.561l1.036-.195V5.322c0-.765.62-1.385 1.385-1.385v0c.765 0 1.385.62 1.385 1.385v3.212h1.489a2.573 2.573 0 0 1 2.573 2.573v2.343M1.717 1.566a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m4.259.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m6.858.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0 4.337a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-2.898.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-8.22.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0 4.319a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path>`,
})
export class StreamlineBrailleBlindIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainIcon],svg[streamline-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.62 1.438A2.38 2.38 0 0 1 7 3.818v6.47a2.724 2.724 0 1 1-5.439-.228C.994 9.45.636 8.26.636 7.265c0-1.354.665-2.67 1.617-3.189A2.38 2.38 0 0 1 4.62 1.438"></svg:path><svg:path d="M3.511 5.694c-.35-.08-1.141-.599-1.26-1.611M4.97 8.365C6.398 8.205 6.963 6.699 7 6.086M2.29 8.632c-.356.28-.64.917-.731 1.427M9.38 1.438A2.38 2.38 0 0 0 7 3.818v6.47a2.724 2.724 0 1 0 5.439-.228c.567-.61.924-1.8.924-2.795c0-1.354-.664-2.67-1.617-3.189A2.38 2.38 0 0 0 9.38 1.438"></svg:path><svg:path d="M10.489 5.694c.35-.08 1.141-.599 1.26-1.611M9.03 8.365C7.602 8.205 7.037 6.699 7 6.086m4.71 2.546c.356.28.64.917.731 1.427"></svg:path></svg:g>`,
})
export class StreamlineBrainIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainCognitiveIcon],svg[streamline-brain-cognitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 13.5V11h2a1 1 0 0 0 1-1V6a5.5 5.5 0 1 0-8 4.9v2.6"></svg:path><svg:path d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.285-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312"></svg:path></svg:g>`,
})
export class StreamlineBrainCognitiveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBriefcaseDollarIcon],svg[streamline-briefcase-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-2.5 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"></svg:path><svg:path d="M8.276 7.167a1 1 0 0 0-.943-.667H6.56a.893.893 0 0 0-.19 1.765l1.178.257a1 1 0 0 1-.214 1.978h-.666a1 1 0 0 1-.943-.667M7 6.5v-1m0 6v-1"></svg:path></svg:g>`,
})
export class StreamlineBriefcaseDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness1Icon],svg[streamline-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.998a1.998 1.998 0 1 0 0-3.996a1.998 1.998 0 0 0 0 3.996M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4"></svg:path>`,
})
export class StreamlineBrightness1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness2Icon],svg[streamline-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 7A3.25 3.25 0 0 0 7 10.25v-6.5A3.25 3.25 0 0 0 3.75 7M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4"></svg:path>`,
})
export class StreamlineBrightness2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness3Icon],svg[streamline-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4M7 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineBrightness3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrokenLink2Icon],svg[streamline-broken-link-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M6 3l1.464-1.464a3.536 3.536 0 0 1 5 5L11 8m-3 3l-1.464 1.464a3.536 3.536 0 0 1-5-5L3 6m6-1L7 7M5 9l.5-.5"></svg:path>`,
})
export class StreamlineBrokenLink2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserAddIcon],svg[streamline-browser-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4 5h-5M7 6v5"></svg:path>`,
})
export class StreamlineBrowserAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBlockIcon],svg[streamline-browser-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2.123-.877L4.877 6.377"></svg:path></svg:g>`,
})
export class StreamlineBrowserBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBuildIcon],svg[streamline-browser-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7zm-13-4h13m-3.5 4v-7"></svg:path>`,
})
export class StreamlineBrowserBuildIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserCheckIcon],svg[streamline-browser-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13"></svg:path><svg:path d="m4 9l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineBrowserCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserDeleteIcon],svg[streamline-browser-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4.5 7l-4-4m4 0l-4 4"></svg:path>`,
})
export class StreamlineBrowserDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserHashIcon],svg[streamline-browser-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M6.546 5.689l-1.817 5.302M9.27 5.689l-1.816 5.302m2.726-3.937H4.274m5.451 2.725H3.821M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBrowserHashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserLockIcon],svg[streamline-browser-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M4.75 10.5v-2a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 8V7A1.5 1.5 0 0 1 7 5.5v0A1.5 1.5 0 0 1 8.5 7v1m-8-4.506h13"></svg:path><svg:path stroke-linecap="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBrowserLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserMultipleWindowIcon],svg[streamline-browser-multiple-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 5V1.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H11m-8-7h10.5"></svg:path><svg:path d="M7.5 7.5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M.5 10h8"></svg:path></svg:g>`,
})
export class StreamlineBrowserMultipleWindowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserRemoveIcon],svg[streamline-browser-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4 5h-5"></svg:path>`,
})
export class StreamlineBrowserRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWebsite1Icon],svg[streamline-browser-website-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBrowserWebsite1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWifiIcon],svg[streamline-browser-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1m-1-9h13"></svg:path><svg:path d="M3.55 7.425c1.9-1.9 5-1.9 6.9 0M5.355 8.958c.859-.859 2.33-.859 3.19 0M6.95 11.297a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBrowserWifiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugIcon],svg[streamline-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M2.5 8h-2m0 3.5a3.46 3.46 0 0 0 2.63-1.2"></svg:path><svg:path d="M3.13 5.7A3.46 3.46 0 0 0 .5 4.5m11 3.5h2m0 3.5a3.46 3.46 0 0 1-2.63-1.2m0-4.6a3.46 3.46 0 0 1 2.63-1.2m-5.26-.83A2.5 2.5 0 0 0 9.5 1.5m-5 0a2.5 2.5 0 0 0 1.26 2.17M2.61 7h8.78"></svg:path></svg:g>`,
})
export class StreamlineBugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusDebuggingIcon],svg[streamline-bug-antivirus-debugging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 10.5l1.3-1.3M4.5 7H3m7.5-3.5L9.2 4.8M9.5 7H11m-4.5-.5h3M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m11.096 4.596L2.404 2.404"></svg:path><svg:path d="M4.804 4.804A2.5 2.5 0 0 1 9.5 6v2a2.5 2.5 0 0 1-.304 1.196M4.5 7v1a2.5 2.5 0 0 0 3.172 2.408"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusDebuggingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusShieldIcon],svg[streamline-bug-antivirus-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.4a1 1 0 0 1-.72 0v0A9.59 9.59 0 0 1 .5 4.46V1.54a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.59 9.59 0 0 1-6.14 8.94"></svg:path><svg:path d="M9 7V5a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0M3.5 6H5m4 0h1.5M5 5.5h4m-.187-1.312L10 3M8.813 7.813L10 9M5.188 7.813L4 9m1.188-4.812L4 3"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusShieldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusBrowserIcon],svg[streamline-bug-virus-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 12.5h-2a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V4m-13-.5h13M6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3"></svg:path><svg:path d="M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path></svg:g>`,
})
export class StreamlineBugVirusBrowserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusDocumentIcon],svg[streamline-bug-virus-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 11.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6l3 3V4M6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3"></svg:path><svg:path d="M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path></svg:g>`,
})
export class StreamlineBugVirusDocumentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusFolderIcon],svg[streamline-bug-virus-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path><svg:path d="M3.5 12h-2a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1V4"></svg:path></svg:g>`,
})
export class StreamlineBugVirusFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBuilding2Icon],svg[streamline-building-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5h-8V4l4-3.5l4 3.5zm0 0h5v-7h-5m-4 7v-2M3 8.5h3m-3-3h3"></svg:path>`,
})
export class StreamlineBuilding2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBulletListIcon],svg[streamline-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5h9M1 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M4.5 7h9M1 12a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5h9"></svg:path>`,
})
export class StreamlineBulletListIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurgerIcon],svg[streamline-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.5h13M4 .5h6A3.5 3.5 0 0 1 13.5 4a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1A3.5 3.5 0 0 1 4 .5m9 9.5H7l-1.5 1.5l-3-1.5H1a.5.5 0 0 0-.5.5v0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class StreamlineBurgerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurritoFastfoodIcon],svg[streamline-burrito-fastfood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m.865 10.397l2.6 2.601a1 1 0 0 0 1.415 0l5.294-5.293l-4.016-4.016L.865 8.983a1 1 0 0 0 0 1.414"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m.6 9.562l5.378 1.409a1 1 0 0 0 1.22-1.221L5.724 4.129"></svg:path><svg:path stroke-linecap="round" d="M6.648 4.18c.122-.191.36-.502.547-.651a2.11 2.11 0 0 1 2.97.33c.73.911.583 2.24-.329 2.97l-.297.237"></svg:path><svg:path stroke-linejoin="round" d="M6.46 4.003a1.784 1.784 0 0 1 0-2.523a1.79 1.79 0 0 1 2.083-.326l.055-.058a1.78 1.78 0 0 1 2.524 0c.315.316.488.72.518 1.134c.41.032.814.199 1.127.512a1.784 1.784 0 0 1 0 2.523l-.06.058A1.785 1.785 0 0 1 9.86 7.404"></svg:path></svg:g>`,
})
export class StreamlineBurritoFastfoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusIcon],svg[streamline-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M3.5 12v1.5m7-1.5v1.5M1.5 7h11"></svg:path><svg:path d="M4 9.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessCardIcon],svg[streamline-business-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 2.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M4.5 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4-3H11m-2.5 3H11"></svg:path></svg:g>`,
})
export class StreamlineBusinessCardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessHandshakeIcon],svg[streamline-business-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.548 3.085l2.194 1.18l1.96-.338a2.23 2.23 0 0 1 1.844.515v0m4.736 4.84L8.18 11.486a2 2 0 0 1-2.285.022L.548 7.863"></svg:path><svg:path d="m13.402 7.84l-2.195 1.5l-3.406-2.75l-1.253.911a1.17 1.17 0 0 1-1.609-.226v0a1.17 1.17 0 0 1 .169-1.613l1.305-1.097a3 3 0 0 1 2.25-.688l2.033.218l2.706-1.463"></svg:path><svg:path d="M7.801 6.597c.82.73 1.982.357 2.414-.239"></svg:path></svg:g>`,
})
export class StreamlineBusinessHandshakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessIdeaMoneyIcon],svg[streamline-business-idea-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.276 3.979a1 1 0 0 0-.943-.667H6.56a.893.893 0 0 0-.19 1.765l1.178.257a1 1 0 0 1-.214 1.978h-.666a1 1 0 0 1-.943-.667M7 3.312v-1m0 6v-1"></svg:path><svg:path d="M11.5 5.031a4.5 4.5 0 1 0-6.5 4v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.5a4.48 4.48 0 0 0 2.5-4M5 13.5h4"></svg:path></svg:g>`,
})
export class StreamlineBusinessIdeaMoneyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProfessionHomeOfficeIcon],svg[streamline-business-profession-home-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.272 6.346h3.455s1 0 1 1v2.456s0 1-1 1H5.272s-1 0-1-1V7.346s0-1 1-1m.474 0v-.572a1 1 0 0 1 1-1h.51a1 1 0 0 1 1 1v.572"></svg:path><svg:path d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineBusinessProfessionHomeOfficeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProgressBar2Icon],svg[streamline-business-progress-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M.5 11H4m3 0h6.5m-2-2l2 2l-2 2m-6-3.5V1m0 0L10 3.5L5.5 6z"></svg:path>`,
})
export class StreamlineBusinessProgressBar2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessUserCurriculumIcon],svg[streamline-business-user-curriculum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"></svg:path><svg:path stroke-linejoin="round" d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"></svg:path><svg:path stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M3.5 8.5h7m-7 2.5h4"></svg:path></svg:g>`,
})
export class StreamlineBusinessUserCurriculumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward1Icon],svg[streamline-button-fast-forward-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.28a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.1a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62z"></svg:path><svg:path d="M6.997 10.28a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L8.097 3.1a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6z"></svg:path></svg:g>`,
})
export class StreamlineButtonFastForward1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward2Icon],svg[streamline-button-fast-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62z"></svg:path><svg:path d="M6.997 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18l-5.08-3.32a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6zM13.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonFastForward2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonNextIcon],svg[streamline-button-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v13M.52 11.66a1 1 0 0 0 .52.88a1 1 0 0 0 1 0l7.19-4.7a1 1 0 0 0 0-1.68L2.02 1.5a1 1 0 0 0-1 0a1 1 0 0 0-.52.88z"></svg:path>`,
})
export class StreamlineButtonNextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPause2Icon],svg[streamline-button-pause-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m8.5 0H10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineButtonPause2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPlayIcon],svg[streamline-button-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.436 12.33a1.14 1.14 0 0 0 .63 1a1.24 1.24 0 0 0 1.22 0l8.65-5.35a1.11 1.11 0 0 0 0-2L3.286.67a1.24 1.24 0 0 0-1.22 0a1.14 1.14 0 0 0-.63 1z"></svg:path>`,
})
export class StreamlineButtonPlayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPower1Icon],svg[streamline-button-power-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5V6m4-4.124a6.5 6.5 0 1 1-8 0"></svg:path>`,
})
export class StreamlineButtonPower1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPreviousIcon],svg[streamline-button-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v13m12.98-1.84a1 1 0 0 1-.52.88a1 1 0 0 1-1 0l-7.19-4.7a1 1 0 0 1 0-1.68l7.21-4.66a1 1 0 0 1 1 0a1 1 0 0 1 .52.88z"></svg:path>`,
})
export class StreamlineButtonPreviousIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRecord3Icon],svg[streamline-button-record-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineButtonRecord3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind1Icon],svg[streamline-button-rewind-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.28a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.58a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62z"></svg:path><svg:path d="M7.003 10.28a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.823 7.58a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6z"></svg:path></svg:g>`,
})
export class StreamlineButtonRewind1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind2Icon],svg[streamline-button-rewind-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62z"></svg:path><svg:path d="M7.003 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.823 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6zM.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonRewind2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonStopIcon],svg[streamline-button-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineButtonStopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCakeSliceIcon],svg[streamline-cake-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-9 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 3h13m-10-7s0-2 1.5-2"></svg:path>`,
})
export class StreamlineCakeSliceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator1Icon],svg[streamline-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 5h11"></svg:path><svg:path d="M4.25 8.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 8.5A.25.25 0 0 1 7 8m0 .5A.25.25 0 0 0 7 8m2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-5.5 3a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7 11a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m2.75.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M10 3H9"></svg:path></svg:g>`,
})
export class StreamlineCalculator1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator2Icon],svg[streamline-calculator-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2M7 .5v13M.5 7h13m-11-3.25H5m4.25 0h2m-2 5.5h2m-2 2h2M3.75 2.5V5M2.69 9.19l2.12 2.12m0-2.12l-2.12 2.12"></svg:path>`,
})
export class StreamlineCalculator2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarAddIcon],svg[streamline-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5m1 6h-5M7 5.5v5"></svg:path>`,
})
export class StreamlineCalendarAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarEditIcon],svg[streamline-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m10 6.864l-4.132 4.132L4 11.25l.263-1.868L8.386 5.25z"></svg:path></svg:g>`,
})
export class StreamlineCalendarEditIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarJumpToDateIcon],svg[streamline-calendar-jump-to-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5M4.419 8.224H9.58"></svg:path><svg:path d="m7.642 10.164l1.94-1.94l-1.94-1.94"></svg:path></svg:g>`,
})
export class StreamlineCalendarJumpToDateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarStarIcon],svg[streamline-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m7.249 4.652l.836 1.683a.26.26 0 0 0 .214.156l1.858.282a.282.282 0 0 1 .156.487L8.941 8.563a.27.27 0 0 0 0 .253l.263 1.848a.282.282 0 0 1-.418.302l-1.654-.876a.33.33 0 0 0-.272 0l-1.654.876a.283.283 0 0 1-.418-.302l.31-1.848a.27.27 0 0 0-.048-.253L3.68 7.25a.282.282 0 0 1 .155-.477l1.858-.272a.26.26 0 0 0 .214-.156l.837-1.683a.282.282 0 0 1 .506-.01Z"></svg:path></svg:g>`,
})
export class StreamlineCalendarStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallCenterSupportServiceIcon],svg[streamline-call-center-support-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.506 13.065a2.7 2.7 0 0 0 3.37-.36l.38-.38a.91.91 0 0 0 0-1.28l-1.6-1.59a.9.9 0 0 0-1.27 0v0a.91.91 0 0 1-1.28 0l-2.55-2.55a.91.91 0 0 1 0-1.28v0a.9.9 0 0 0 0-1.27l-1.54-1.6a.91.91 0 0 0-1.28 0l-.38.38a2.7 2.7 0 0 0-.41 3.37a24.2 24.2 0 0 0 6.56 6.56m5.959-9.893h-2.748a.215.215 0 0 1-.215-.216v0a.22.22 0 0 1 .053-.142l1.96-2.24a.2.2 0 0 1 .154-.07v0c.112 0 .203.092.203.204v3.353M8.85 4.06H6.48v-.505a.89.89 0 0 1 .533-.814l1.32-.577a.866.866 0 0 0-.348-1.66h-.616a.89.89 0 0 0-.838.593"></svg:path>`,
})
export class StreamlineCallCenterSupportServiceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallHangUpIcon],svg[streamline-call-hang-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.761 8.69a1.06 1.06 0 0 1-1.484 0a1.05 1.05 0 0 0-1.474 0L.926 10.549a1.06 1.06 0 0 0 0 1.484l.442.433a3.135 3.135 0 0 0 3.931.432a28 28 0 0 0 2.647-2.021M.5.5l13 13M9.467 9.467a28.4 28.4 0 0 0 3.46-4.177a3.135 3.135 0 0 0-.433-3.931L12.06.916a1.06 1.06 0 0 0-1.484 0L8.71 2.784a1.05 1.05 0 0 0 0 1.474a1.04 1.04 0 0 1 0 1.484L7.226 7.226"></svg:path>`,
})
export class StreamlineCallHangUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCamera1Icon],svg[streamline-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7 9.75a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path></svg:g>`,
})
export class StreamlineCamera1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraDisabledIcon],svg[streamline-camera-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8.219m-4.04-6.321a2.25 2.25 0 0 1 3.143 3.143"></svg:path><svg:path d="M3.714 3.714L5 2h4l1.5 2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H12M4.778 7.145a2.25 2.25 0 0 0 2.577 2.577M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineCameraDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraLoadingIcon],svg[streamline-camera-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M4.292 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.596.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M9.75 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineCameraLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraSquareIcon],svg[streamline-camera-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M10.5 6a1 1 0 0 0-1-1H9L8 3.5H6L5 5h-.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7 7.375a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></svg:path></svg:g>`,
})
export class StreamlineCameraSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraVideoIcon],svg[streamline-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4M10 9H4.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m3.5 1v2.5"></svg:path>`,
})
export class StreamlineCameraVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCampingTentIcon],svg[streamline-camping-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.5v3m2-13l-8.5 13h13L5 .5"></svg:path>`,
})
export class StreamlineCampingTentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCandyCaneIcon],svg[streamline-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V5a4.5 4.5 0 1 0-9 0v1a1.5 1.5 0 0 0 3 0zm3 5l3-3M8.42 4.51L9.95 1.6M5.86 4.02L3.03 2.88"></svg:path>`,
})
export class StreamlineCandyCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneIcon],svg[streamline-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.799 9.979l-.057-.641a1.183 1.183 0 0 1 1.075-1.282v0a1.18 1.18 0 0 1 1.211.764l1.411 3.772M3.57 2.822a1.715 1.715 0 1 0 3.43 0a1.715 1.715 0 1 0-3.43 0"></svg:path><svg:path d="m2.099 12.592l2.573-8.148c.278.706 1.565 2.557 3.194 2.386"></svg:path><svg:path d="m3.57 7.963l2.087 1.503a1 1 0 0 1 .388.577l.615 2.549"></svg:path></svg:g>`,
})
export class StreamlineCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneAltIcon],svg[streamline-cane-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V4a3.5 3.5 0 1 1 7 0v8.25a1.25 1.25 0 1 1-2.5 0V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCapitolIcon],svg[streamline-capitol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.262 8.831H.857l6.202-3.544zM.857 13.261h12.405M1.743 8.831v4.43M4.4 8.831v4.43m2.66-4.43v4.43m2.657-4.43v4.43m2.659-4.43v4.43"></svg:path><svg:path d="M3.515 7.296V5.73a3.544 3.544 0 1 1 7.088 0v1.566M7.06 2.185V.856"></svg:path></svg:g>`,
})
export class StreamlineCapitolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarBatteryChargingIcon],svg[streamline-car-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1M2 4V2h3v2m4 0V2h3v2"></svg:path><svg:path d="m7.5 6l-2 2.5h3l-2 3"></svg:path></svg:g>`,
})
export class StreamlineCarBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarTaxi1Icon],svg[streamline-car-taxi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2 11h-.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H3l.77-2.32a1 1 0 0 1 1-.68h4.01a1 1 0 0 1 1 .68L10.5 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 12.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002M8.998 11H5m2-7V2"></svg:path></svg:g>`,
})
export class StreamlineCarTaxi1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCardsIcon],svg[streamline-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.546.857a.475.475 0 0 1 .581-.335l6.02 1.612a.475.475 0 0 1 .337.581l-2.31 8.618a.475.475 0 0 1-.582.335l-6.02-1.612a.475.475 0 0 1-.336-.581z"></svg:path><svg:path d="M6.108 2.535L.852 3.944a.475.475 0 0 0-.336.581l2.308 8.618a.475.475 0 0 0 .582.335l3.01-.806"></svg:path></svg:g>`,
})
export class StreamlineCardsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCat1Icon],svg[streamline-cat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-4.5 6.46a4 4 0 0 0 1.5.29h2a4 4 0 0 0 1.5-.29M2 7.5v-7l4.153 3.056M12 7.5v-7L7.86 3.556"></svg:path><svg:path d="M4.019 4.5c.732-.614 1.796-1 2.981-1s2.25.386 2.982 1M.5 9.5H4m0 2L1 13m9-3.5h3.5m-3.5 2l3 1.5M7.75 9.5h-1.5L7 10z"></svg:path></svg:g>`,
})
export class StreamlineCat1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork4gIcon],svg[streamline-cellular-network-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.527 4.846c-.773-.547-1.633-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875m-1.689 8.324h1.306v.87c0 .722-.584 1.307-1.306 1.307h-.87a1.306 1.306 0 0 1-1.306-1.306V9.41c0-.72.585-1.306 1.306-1.306h.87c.569 0 1.053.364 1.232.871M6.45 12.023H2.414a.316.316 0 0 1-.316-.317v0c0-.076.027-.15.078-.208l2.879-3.29a.3.3 0 0 1 .225-.103v0a.3.3 0 0 1 .3.3v4.924"></svg:path>`,
})
export class StreamlineCellularNetwork4gIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork5gIcon],svg[streamline-cellular-network-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.59 4.846c-.773-.547-1.633-.853-2.512-.892c-.877.042-1.734.348-2.504.895M2.16 2.828A7.9 7.9 0 0 1 7.066.953a7.9 7.9 0 0 1 4.899 1.875m-1.821 8.449h1.306v.87c0 .722-.585 1.307-1.306 1.307h-.87a1.306 1.306 0 0 1-1.306-1.306V9.536c0-.72.584-1.306 1.306-1.306h.87c.569 0 1.052.364 1.232.871m-5.4-.867H3.148l-.435 2.61l.32-.16A2.6 2.6 0 0 1 4.2 10.41h.688c.721 0 1.305.584 1.305 1.305v.435c0 .72-.584 1.305-1.305 1.305h-.87a1.305 1.305 0 0 1-1.23-.87"></svg:path>`,
})
export class StreamlineCellularNetwork5gIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetworkLteIcon],svg[streamline-cellular-network-lte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.03 8.027v5.223M4.287 8.027H7.77m4.988 0H9.276v5.223h3.482m-3.482-2.83h3.047M1.242 8.027v5.223h3.047m5.238-8.404c-.773-.547-1.632-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875"></svg:path>`,
})
export class StreamlineCellularNetworkLteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCelsiusIcon],svg[streamline-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m10.5 0c-.412-1.165-1.694-2-3-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3c1.306 0 2.588-.835 3-2"></svg:path>`,
})
export class StreamlineCelsiusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChairIcon],svg[streamline-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8h11m-10 0V.5m9 0V8m-9-6.5h9m-9 3h9M2.5 8l8 5.5m1-5.5l-8 5.5"></svg:path>`,
})
export class StreamlineChairIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChampagnePartyAlcoholIcon],svg[streamline-champagne-party-alcohol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.179 6.011L4.114.881l3.653 1.04l-1.062 5.38a2.362 2.362 0 1 1-4.526-1.29m1.563 3.104l-1.074 3.766m-1.484-.424l2.967.846"></svg:path><svg:path d="m3.148 3.438l4.086 1.175"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.567 8.963a2.362 2.362 0 0 0 3.255-2.952L9.885.881l-.576.163m.949 8.071l1.074 3.766m1.484-.424l-2.967.846m1.003-9.853l-1.669.48"></svg:path></svg:g>`,
})
export class StreamlineChampagnePartyAlcoholIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalIcon],svg[streamline-chat-bubble-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.145 12.84a6.5 6.5 0 1 0-2.556-2.238m2.556 2.239L.5 13.5l1.089-2.897m2.556 2.238l.005-.001m-2.561-2.237l.001-.003"></svg:path>`,
})
export class StreamlineChatBubbleOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalNotificationIcon],svg[streamline-chat-bubble-oval-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.114.585a6.474 6.474 0 0 0-4.503 9.96L.526 13.474l3.635-.658a6.464 6.464 0 0 0 9.274-5.14"></svg:path><svg:path d="M10.984 5.505a2.49 2.49 0 1 0 0-4.98a2.49 2.49 0 0 0 0 4.98"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley1Icon],svg[streamline-chat-bubble-oval-smiley-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalSmiley1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley2Icon],svg[streamline-chat-bubble-oval-smiley-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path><svg:path d="M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 11a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 7 11"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalSmiley2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareBlockIcon],svg[streamline-chat-bubble-square-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.578 9.751a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m2.3-.951l-4.6-4.6"></svg:path><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareQuestionIcon],svg[streamline-chat-bubble-square-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path><svg:path d="M6 5a1.5 1.5 0 1 1 1.5 1.5v1m0 2.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareQuestionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWarningIcon],svg[streamline-chat-bubble-square-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm3-9.5v3.5"></svg:path><svg:path d="M7.5 9.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWriteIcon],svg[streamline-chat-bubble-square-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"></svg:path><svg:path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTextSquareIcon],svg[streamline-chat-bubble-text-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm0-7.5h6m-6 3h4"></svg:path>`,
})
export class StreamlineChatBubbleTextSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTypingOvalIcon],svg[streamline-chat-bubble-typing-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.002 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleTypingOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatTwoBubblesOvalIcon],svg[streamline-chat-two-bubbles-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 5a4.25 4.25 0 0 1 3.54 6.6l.71 1.9l-2.39-.43A4.25 4.25 0 1 1 9.25 5"></svg:path><svg:path d="M9.86 2.51A5.24 5.24 0 0 0 .5 5.75a5.2 5.2 0 0 0 .88 2.91L.5 11l2.12-.38"></svg:path></svg:g>`,
})
export class StreamlineChatTwoBubblesOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckIcon],svg[streamline-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.55l2.73 3.51a1 1 0 0 0 1.56.03L13.5 1.55"></svg:path>`,
})
export class StreamlineCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSquareIcon],svg[streamline-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path><svg:path d="m9.917 4.75l-4 5l-2-1.5"></svg:path></svg:g>`,
})
export class StreamlineCheckSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckupMedicalReportClipboardIcon],svg[streamline-checkup-medical-report-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M6.303 5.21a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.1h1.207a.43.43 0 0 0 .43-.43V7.277a.43.43 0 0 0-.43-.429H8.128V5.639a.43.43 0 0 0-.43-.429z"></svg:path></svg:g>`,
})
export class StreamlineCheckupMedicalReportClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheeseIcon],svg[streamline-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.09.77L9 .75L.75 5.61A.47.47 0 0 0 .5 6v6.71a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77M.59 5.75H13"></svg:path><svg:path d="m.5 10.38l.08-.07A2 2 0 0 1 2 9.71a2 2 0 0 1 2 2a2 2 0 0 1-.59 1.41M9 10.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class StreamlineCheeseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCherriesIcon],svg[streamline-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.36 13.5a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2m7.28-1.04a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2"></svg:path><svg:path d="M9.41 7.57A10.36 10.36 0 0 1 6 .5a13.8 13.8 0 0 0-2.6 7.8M3.36.5h5.2"></svg:path></svg:g>`,
})
export class StreamlineCherriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessBishopIcon],svg[streamline-chess-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.761 7.377c.433-.317.692-.807.692-1.505c0-1.97-2.454-3.095-2.454-3.095S4.546 3.902 4.546 5.872c0 .698.259 1.188.691 1.505c-.45 1.287-1.104 3.19-1.125 3.46h5.774c-.02-.27-.674-2.173-1.125-3.46"></svg:path><svg:path d="M5.861 1.639a1.139 1.139 0 1 0 2.277 0a1.139 1.139 0 0 0-2.277 0M7.389 5.47L8.732 4.1m-5.929 7.344a.89.89 0 0 1 .842-.607h6.71c.382 0 .721.244.842.607l.685 2.056H2.118z"></svg:path></svg:g>`,
})
export class StreamlineChessBishopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKingIcon],svg[streamline-chess-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.998 5.81l1.027 2.955l-.768 2.1h5.486l-.768-2.1l1.028-2.955c.142-.408-.176-.83-.625-.83H4.622c-.45 0-.766.422-.624.83M7 3.017V.5m-.755.755h1.51M8.963 4.98a1.963 1.963 0 0 0-3.926 0m-2.189 6.486c.12-.359.455-.6.833-.6h6.638c.378 0 .714.241.833.6l.678 2.034H2.17z"></svg:path>`,
})
export class StreamlineChessKingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKnightIcon],svg[streamline-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.42 11.256a.97.97 0 0 1 .919-.662h7.322c.417 0 .787.267.92.662l.747 2.244H1.672zm1.152-.662c.158-.83 1.306-1.783 2.117-2.418c1.945-1.522 1.765-2.824 1.447-3.177L5.193 6.11a1.23 1.23 0 0 1-1.437-.154v0a1.23 1.23 0 0 1-.237-1.543L4.983 1.93L4.42.658c.93-.33 3.501-.155 4.518.635c1.27.989 2.894 2.489 1.553 9.3"></svg:path><svg:path d="M7.773 3.971a1.9 1.9 0 0 1-.631 1.03"></svg:path></svg:g>`,
})
export class StreamlineChessKnightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessPawnIcon],svg[streamline-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.61 11.35a.93.93 0 0 1 .88-.636h7.02c.399 0 .754.256.88.635l.717 2.151H1.893zm2.069-8.529a2.321 2.321 0 1 0 4.642 0a2.321 2.321 0 1 0-4.642 0"></svg:path><svg:path d="M3.75 10.714c.996-.995 1.658-4.124 1.857-5.571m4.643 5.571C9.254 9.72 8.592 6.59 8.393 5.143m-4.179 0h5.572"></svg:path></svg:g>`,
})
export class StreamlineChessPawnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChickenGrilledStreamIcon],svg[streamline-chicken-grilled-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M2.243 2.246v1.562m4.563-1.562v1.562M4.525 1.083v1.562"></svg:path><svg:path d="M11.509 4.602a.955.955 0 1 0 1.91 0a.955.955 0 1 0-1.91 0"></svg:path><svg:path stroke-linejoin="round" d="m10.841 8.677l.212.093c1.48.7 1.889 1.606 1.889 2.85v.298a1 1 0 0 1-1 1H1.64c-.327 0-.634-.161-.76-.463c-.277-.669-.599-2.013.238-3.685c1.21-2.416 4.187-2.947 6.094-1.947l.09.046"></svg:path><svg:path d="M10.158 10.006c.928-1.018.976-2.485.108-3.275s-2.323-.605-3.25.413c-.843.925-.96 2.219-.325 3.04q.096.127.217.235"></svg:path><svg:path stroke-linejoin="round" d="M11.806 5.296L10.32 6.781"></svg:path></svg:g>`,
})
export class StreamlineChickenGrilledStreamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross1Icon],svg[streamline-christian-cross-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H9v-3H5v3H2v4h3v6h4v-6h3z"></svg:path>`,
})
export class StreamlineChristianCross1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross2Icon],svg[streamline-christian-cross-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-4-9h8"></svg:path>`,
})
export class StreamlineChristianCross2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianityIcon],svg[streamline-christianity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4s-3.67 6-8 6a5.6 5.6 0 0 1-5-3a5.6 5.6 0 0 1 5-3c4.33 0 8 6 8 6"></svg:path>`,
})
export class StreamlineChristianityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChromeIcon],svg[streamline-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.86 7.047a6.187 6.187 0 1 0 12.374 0a6.187 6.187 0 1 0-12.374 0m6.187-2.432h5.691"></svg:path><svg:path d="M4.615 7.046a2.431 2.431 0 1 0 4.862 0a2.431 2.431 0 1 0-4.862 0m.318 1.218L2.087 3.335m7.061 4.924l-2.846 4.929"></svg:path></svg:g>`,
})
export class StreamlineChromeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleIcon],svg[streamline-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleClockIcon],svg[streamline-circle-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 4.5V7l2.54 2.96"></svg:path></svg:g>`,
})
export class StreamlineCircleClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleFlaskIcon],svg[streamline-circle-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.494 4.767V.523H5.505v4.244a4.483 4.483 0 1 0 2.99 0ZM4 .523h6"></svg:path>`,
})
export class StreamlineCircleFlaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCityHallIcon],svg[streamline-city-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.707 13.438h12.75M3.86 5.687l3.222-2.53l3.222 2.53M4.35 7.813h5.464v5.625H4.35V7.811ZM3.238 5.688h7.688v2.121H3.238zM1.618 7.81v5.628M12.546 7.81v5.625M.707 7.81h12.75M7.082 3.156V.674m0 0h1.25"></svg:path><svg:path d="M6.095 11.203a.93.93 0 0 1 .931-.93v0a.93.93 0 0 1 .931.93v2.235H6.095z"></svg:path></svg:g>`,
})
export class StreamlineCityHallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClassLessonIcon],svg[streamline-class-lesson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.35.5h6.302c.469 0 .849.38.849.849v6.778c0 .47-.38.85-.849.85H7.5M3.149 4.001a1.75 1.75 0 1 0 0-3.501a1.75 1.75 0 0 0 0 3.501"></svg:path><svg:path d="M9 5.527C9 4.96 8.54 4.5 7.973 4.5H3.149v0A2.65 2.65 0 0 0 .5 7.149V9.5h1.135l.379 4h2.27l.872-6.945h2.817C8.54 6.555 9 6.095 9 5.527"></svg:path></svg:g>`,
})
export class StreamlineClassLessonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCleanWaterAndSanitationIcon],svg[streamline-clean-water-and-sanitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.942 1.812A1.015 1.015 0 0 1 3.95.671h5.823c.61 0 1.083.535 1.007 1.141l-.761 6.093c-.064.508-.496.89-1.008.89h-4.3c-.512 0-.944-.382-1.007-.89zm3.806 6.977v4.39m-1.463-1.464l1.463 1.463l1.463-1.463"></svg:path><svg:path d="M3.307 4.714c3.628.518 3.628-1.555 7.255-1.036"></svg:path></svg:g>`,
})
export class StreamlineCleanWaterAndSanitationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardAddIcon],svg[streamline-clipboard-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M7 6v5m2.5-2.5h-5"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path></svg:g>`,
})
export class StreamlineClipboardAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardCheckIcon],svg[streamline-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:path d="m5 9l1.5 1l3-4"></svg:path></svg:g>`,
})
export class StreamlineClipboardCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardRemoveIcon],svg[streamline-clipboard-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1m1 8h-5"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path></svg:g>`,
})
export class StreamlineClipboardRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClosetIcon],svg[streamline-closet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M7 .5v13m2.5-7v1m-5-1v1"></svg:path>`,
})
export class StreamlineClosetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudIcon],svg[streamline-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 6.5a2.5 2.5 0 0 0-1.5.5A4.5 4.5 0 1 0 5 11.5h6a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class StreamlineCloudIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudAddIcon],svg[streamline-cloud-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.392 9.283H4.608M7 6.891v4.784m-3.08-.682a3.193 3.193 0 0 1-.428-6.371a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.61 5.388"></svg:path>`,
})
export class StreamlineCloudAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudBlockIcon],svg[streamline-cloud-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.044a2.8 2.8 0 1 1 0-5.6a2.8 2.8 0 0 1 0 5.6m1.982-.818L5.018 7.263"></svg:path><svg:path d="M2.819 10.874a3.193 3.193 0 0 1 .673-6.252a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.116 5.34"></svg:path></svg:g>`,
})
export class StreamlineCloudBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudCheckIcon],svg[streamline-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.803 8.55l-3.206 3.606l-1.603-1.202"></svg:path><svg:path d="M10.773 10.993a2.73 2.73 0 0 0 .61-5.388a.25.25 0 0 1-.173-.2a3.868 3.868 0 0 0-7.509-.91a.23.23 0 0 1-.21.127a3.192 3.192 0 0 0-.255 6.343"></svg:path></svg:g>`,
})
export class StreamlineCloudCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudDataTransferIcon],svg[streamline-cloud-data-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.984 8.848l1.968-1.74v5.218m4.065-1.739l-1.969 1.739V7.108"></svg:path><svg:path d="M3.92 10.842a3.193 3.193 0 0 1-.428-6.37a.23.23 0 0 0 .21-.128a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1 .502 5.144"></svg:path></svg:g>`,
})
export class StreamlineCloudDataTransferIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudGaming1Icon],svg[streamline-cloud-gaming-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.579 6.126v2.786M3.186 7.519h2.786M.5 7a4.643 4.643 0 0 0 4.643 4.643h4.643a3.714 3.714 0 1 0-.856-7.33A4.643 4.643 0 0 0 .5 7"></svg:path><svg:path d="M9.131 7.853a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.139.25a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-1.045-.797a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 2.388a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineCloudGaming1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudRefreshIcon],svg[streamline-cloud-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 11.32a3.194 3.194 0 0 1-.21-5.818a3.2 3.2 0 0 1 1.202-.324a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2A2.73 2.73 0 0 1 12 11.249"></svg:path><svg:path d="M9.45 10.5a2.5 2.5 0 1 0-.832 2.406"></svg:path><svg:path d="m10 9l-.55 1.5L8 10.25"></svg:path></svg:g>`,
})
export class StreamlineCloudRefreshIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudShareIcon],svg[streamline-cloud-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2 11.062A3.2 3.2 0 0 1 .52 8.577a3.193 3.193 0 0 1 2.972-3.4a.23.23 0 0 0 .21-.126a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2A2.73 2.73 0 0 1 12 11.249M8.108 8.946L5.89 10.055"></svg:path><svg:path d="M8 8.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-4 2a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 2a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-2.11-1.555l2.218 1.109"></svg:path></svg:g>`,
})
export class StreamlineCloudShareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWarningIcon],svg[streamline-cloud-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.549h1.273a2.73 2.73 0 0 0 .61-5.388a.25.25 0 0 1-.173-.2A3.868 3.868 0 0 0 3.7 5.05a.23.23 0 0 1-.21.127a3.193 3.193 0 0 0-1.886 5.589c.637.557 1.395.782 2.315.782h.58M7 7.154v3.5m0 2.596a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path>`,
})
export class StreamlineCloudWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWifiIcon],svg[streamline-cloud-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.239a9 9 0 0 0-7 0m5.7 2.099a6.78 6.78 0 0 0-4.36 0m6.03 5.369a.22.22 0 0 1-.153-.177a3.415 3.415 0 0 0-6.63-.804a.2.2 0 0 1-.184.113a2.819 2.819 0 0 0 .377 5.624h6.05a2.41 2.41 0 0 0 .54-4.756"></svg:path>`,
})
export class StreamlineCloudWifiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClubsSymbolIcon],svg[streamline-clubs-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a2.786 2.786 0 0 0-2.786 2.786c0 .696.256 1.523.678 2.22c-.538-.231-1.106-.363-1.606-.363a2.786 2.786 0 0 0 0 5.571c.73 0 1.604-.28 2.321-.74L4.892 13.5h4.216l-.715-3.527c.717.46 1.59.741 2.321.741a2.786 2.786 0 0 0 0-5.571c-.5 0-1.068.132-1.606.363c.422-.697.678-1.524.678-2.22A2.786 2.786 0 0 0 7 .5"></svg:path>`,
})
export class StreamlineClubsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCocktailIcon],svg[streamline-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.679 3h8.642M7 8.5L1.659 1.702a.74.74 0 0 1-.159-.459v0c0-.41.333-.743.743-.743h9.514c.41 0 .743.333.743.743v0a.74.74 0 0 1-.159.46zm0 0v5m-3 0h6"></svg:path>`,
})
export class StreamlineCocktailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCodeAnalysisIcon],svg[streamline-code-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.625 12.5a5.875 5.875 0 1 0 0-11.75a5.875 5.875 0 0 0 0 11.75m6.625.75l-2.467-2.467"></svg:path><svg:path d="m5.5 4.5l-2 2l2 2m2-4l2 2l-2 2"></svg:path></svg:g>`,
})
export class StreamlineCodeAnalysisIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCodeMonitor1Icon],svg[streamline-code-monitor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="m4.5 5.25l-1.75 1.5L4.25 8m5.5-2.5l1.5 1.25l-1.75 1.5m-3.25.5l1.5-4.5"></svg:path></svg:g>`,
})
export class StreamlineCodeMonitor1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCodeMonitor2Icon],svg[streamline-code-monitor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6M7.5 2v9M3 5h2M3 8h1"></svg:path><svg:path d="m7.5 7l1.21-1a2 2 0 0 1 2.55 0l2.24 2"></svg:path></svg:g>`,
})
export class StreamlineCodeMonitor2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeBeanIcon],svg[streamline-coffee-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.536 10.536c-2.539 2.538-6.18 3.013-8.132 1.06C.45 9.643.926 6.003 3.464 3.464C6.004.926 9.645.451 11.597 2.404c1.953 1.952 1.478 5.593-1.06 8.132Z"></svg:path><svg:path d="M11.596 2.404s-.353 2.475-1.768 3.889c-1.414 1.414-4.242 0-5.656 1.414c-1.415 1.414-1.768 3.89-1.768 3.89"></svg:path></svg:g>`,
})
export class StreamlineCoffeeBeanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeMugIcon],svg[streamline-coffee-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1m6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"></svg:path>`,
})
export class StreamlineCoffeeMugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeTakeawayCupIcon],svg[streamline-coffee-takeaway-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 3h-9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 0l-1-2.5h-7L2.5 3m9 4l-1 6.5h-7L2.5 7"></svg:path>`,
})
export class StreamlineCoffeeTakeawayCupIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCogIcon],svg[streamline-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.23 2.25l.43-1.11A1 1 0 0 1 6.59.5h.82a1 1 0 0 1 .93.64l.43 1.11l1.46.84l1.18-.18a1 1 0 0 1 1 .49l.4.7a1 1 0 0 1-.08 1.13l-.73.93v1.68l.75.93a1 1 0 0 1 .08 1.13l-.4.7a1 1 0 0 1-1 .49l-1.18-.18l-1.46.84l-.43 1.11a1 1 0 0 1-.93.64h-.84a1 1 0 0 1-.93-.64l-.43-1.11l-1.46-.84l-1.18.18a1 1 0 0 1-1-.49l-.4-.7a1 1 0 0 1 .08-1.13L2 7.84V6.16l-.75-.93a1 1 0 0 1-.08-1.13l.4-.7a1 1 0 0 1 1-.49l1.18.18zM5 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class StreamlineCogIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCoinShareIcon],svg[streamline-coin-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 8.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-3v-2M.5 11l2.444 2.036a2 2 0 0 0 1.28.464h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.354"></svg:path><svg:path d="m3.5 10l.75.75a1.06 1.06 0 0 0 1.5-1.5L4.586 8.086A2 2 0 0 0 3.172 7.5H.5"></svg:path></svg:g>`,
})
export class StreamlineCoinShareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCoinsStackIcon],svg[streamline-coins-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 7.5c2.485 0 4.5-.895 4.5-2s-2.015-2-4.5-2s-4.5.895-4.5 2s2.015 2 4.5 2"></svg:path><svg:path d="M4.5 5.5v6c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-6"></svg:path><svg:path d="M13.5 8.5c0 1.1-2 2-4.5 2s-4.5-.9-4.5-2m4.4-6.991a6.77 6.77 0 0 0-3.9-1c-2.49 0-4.5.9-4.5 2c0 .59.58 1.12 1.5 1.5"></svg:path><svg:path d="M2 10.009c-.92-.38-1.5-.91-1.5-1.5v-6"></svg:path><svg:path d="M2 7.009c-.92-.38-1.5-.91-1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineCoinsStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCollaborationsIdeaIcon],svg[streamline-collaborations-idea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.194 8.094a1.86 1.86 0 1 0 0-3.719a1.86 1.86 0 0 0 0 3.719M.523 13.479A3.7 3.7 0 0 1 1 11.704a3.71 3.71 0 0 1 3.195-1.868c1.31.003 2.55.727 3.195 1.868a3.7 3.7 0 0 1 .477 1.774m2.02-12.095v-.82m2.799 1.827l.671-.471m-6.271.471l-.672-.471m5.506 3.139a2.055 2.055 0 0 0-2.077-2.042a2.055 2.055 0 0 0-1.99 2.127a2.07 2.07 0 0 0 1.126 1.73v1a.227.227 0 0 0 .226.22h1.361a.227.227 0 0 0 .227-.22V6.855a2.07 2.07 0 0 0 1.128-1.797Z"></svg:path>`,
})
export class StreamlineCollaborationsIdeaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineColorPaletteIcon],svg[streamline-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M9.5 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M7 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class StreamlineColorPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineColorPickerIcon],svg[streamline-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.416 1.584a3.493 3.493 0 0 0-4.96 0L2.902 6.137a2.98 2.98 0 0 0-.526 3.502L.84 11.177a.99.99 0 0 0 0 1.399l.585.585a.99.99 0 0 0 1.399 0l1.537-1.537a2.98 2.98 0 0 0 3.503-.526l4.553-4.554a3.494 3.494 0 0 0 0-4.96Zm-7.896-.04l7.936 7.937"></svg:path>`,
})
export class StreamlineColorPickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineColorSwatchesIcon],svg[streamline-color-swatches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h3a1 1 0 0 1 1 1V11A2.5 2.5 0 0 1 3 13.5v0A2.5 2.5 0 0 1 .5 11V1.5a1 1 0 0 1 1-1"></svg:path><svg:path d="M5.5 5L9 1.48a1 1 0 0 1 1.41 0l2.11 2.12a1 1 0 0 1 0 1.41l-7.75 7.76"></svg:path><svg:path d="M9 8.5h3.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3m-2.5-9h5m-5 4h5"></svg:path></svg:g>`,
})
export class StreamlineColorSwatchesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCometIcon],svg[streamline-comet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5L2.025 7.025a3.5 3.5 0 0 0 4.95 4.95L13.5 5.5"></svg:path><svg:path d="M3 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-2L11.5 4m-5 2L12 .5"></svg:path></svg:g>`,
})
export class StreamlineCometIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCommandIcon],svg[streamline-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.75 10A1.75 1.75 0 1 1 10 11.75v-9.5A1.75 1.75 0 1 1 11.75 4h-9.5A1.75 1.75 0 1 1 4 2.25v9.5A1.75 1.75 0 1 1 2.25 10z"></svg:path>`,
})
export class StreamlineCommandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCompassNavigatorIcon],svg[streamline-compass-navigator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.04 1.605a1.099 1.099 0 0 1 1.355 1.355l-1.902 6.772a1.1 1.1 0 0 1-.76.761L2.96 12.395a1.099 1.099 0 0 1-1.355-1.355l1.902-6.772c.103-.37.392-.658.76-.761z"></svg:path><svg:path d="M5.689 5.689a1.854 1.854 0 1 0 2.622 2.622a1.854 1.854 0 1 0-2.622-2.622"></svg:path></svg:g>`,
})
export class StreamlineCompassNavigatorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCompositionOvalIcon],svg[streamline-composition-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11a10.3 10.3 0 0 0 1-4a10.3 10.3 0 0 0-1-4A13.3 13.3 0 0 0 7 2a13.3 13.3 0 0 0-5.5 1a10.3 10.3 0 0 0-1 4a10.3 10.3 0 0 0 1 4A13.3 13.3 0 0 0 7 12a13.3 13.3 0 0 0 5.5-1"></svg:path>`,
})
export class StreamlineCompositionOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCompositionVerticalIcon],svg[streamline-composition-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.19 1.19a.52.52 0 0 0 0-.47a.49.49 0 0 0-.41-.22H3.25a.49.49 0 0 0-.492.449a.5.5 0 0 0 .031.241a14.67 14.67 0 0 1 0 11.62a.52.52 0 0 0 .05.47a.49.49 0 0 0 .41.22h7.48a.49.49 0 0 0 .41-.22a.52.52 0 0 0 0-.47a14.67 14.67 0 0 1 .05-11.62Z"></svg:path>`,
})
export class StreamlineCompositionVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCompsitionHorizontalIcon],svg[streamline-compsition-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.81 11.2a.52.52 0 0 0 .47 0a.49.49 0 0 0 .22-.41V3.26a.49.49 0 0 0-.449-.491a.5.5 0 0 0-.241.031a14.67 14.67 0 0 1-11.62 0a.52.52 0 0 0-.47.05a.49.49 0 0 0-.22.41v7.48a.49.49 0 0 0 .22.41a.52.52 0 0 0 .47 0a14.67 14.67 0 0 1 11.62.05"></svg:path>`,
})
export class StreamlineCompsitionHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerBatteryEmpty1PhoneMobileChargeDeviceElectricityEmptyPowerBatteryIcon],svg[streamline-computer-battery-empty-1-phone-mobile-charge-device-electricity-empty-power-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Z"></svg:path>`,
})
export class StreamlineComputerBatteryEmpty1PhoneMobileChargeDeviceElectricityEmptyPowerBatteryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerBatteryFull1PhoneMobileChargeDeviceElectricityPowerBatteryFullIcon],svg[streamline-computer-battery-full-1-phone-mobile-charge-device-electricity-power-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3m3-3v3"></svg:path>`,
})
export class StreamlineComputerBatteryFull1PhoneMobileChargeDeviceElectricityPowerBatteryFullIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerBatteryLow1PhoneMobileChargeDeviceElectricityPowerBatteryLowIcon],svg[streamline-computer-battery-low-1-phone-mobile-charge-device-electricity-power-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3"></svg:path>`,
})
export class StreamlineComputerBatteryLow1PhoneMobileChargeDeviceElectricityPowerBatteryLowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerBatteryMedium1PhoneMobileChargeMediumDeviceElectricityPowerBatteryIcon],svg[streamline-computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3"></svg:path>`,
})
export class StreamlineComputerBatteryMedium1PhoneMobileChargeMediumDeviceElectricityPowerBatteryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip1Icon],svg[streamline-computer-chip-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 3V.5M9 3V.5M3 9H.5M3 5H.5M9 11v2.5M5 11v2.5M11 5h2.5M11 9h2.5m-5-1.5h-2"></svg:path>`,
})
export class StreamlineComputerChip1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip1ComputerDeviceChipElectronicsCpuMicroprocessorIcon],svg[streamline-computer-chip-1-computer-device-chip-electronics-cpu-microprocessor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="8" x="3" y="3" rx="1"></svg:rect><svg:path d="M5 3V.5M9 3V.5M3 9H.5M3 5H.5M9 11v2.5M5 11v2.5M11 5h2.5M11 9h2.5m-5-1.5h-2"></svg:path></svg:g>`,
})
export class StreamlineComputerChip1ComputerDeviceChipElectronicsCpuMicroprocessorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip2Icon],svg[streamline-computer-chip-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 .5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-7 3H.5M3 7H.5M3 10.5H.5m13-7H11M13.5 7H11m2.5 3.5H11m-4.5 0h2"></svg:path>`,
})
export class StreamlineComputerChip2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip2CoreMicroprocessorDeviceElectronicsChipComputerIcon],svg[streamline-computer-chip-2-core-microprocessor-device-electronics-chip-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="13" x="3" y=".5" rx="1"></svg:rect><svg:path d="M3 3.5H.5M3 7H.5M3 10.5H.5m13-7H11M13.5 7H11m2.5 3.5H11m-4.5 0h2"></svg:path></svg:g>`,
})
export class StreamlineComputerChip2CoreMicroprocessorDeviceElectronicsChipComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionCableSplitCablesCableSplitDeviceComputerElectronicsCordsCordSplitterIcon],svg[streamline-computer-connection-cable-split-cables-cable-split-device-computer-electronics-cords-cord-splitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="6.88" r="1.5"></svg:circle><svg:path d="M5.5 13.38h3m-3-2.5h3m.249-7.754L11.252.623l2 2l-2.502 2.504zM2.75.63l-2 2m2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineComputerConnectionCableSplitCablesCableSplitDeviceComputerElectronicsCordsCordSplitterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionNetworkNetworkServerInternetEthernetIcon],svg[streamline-computer-connection-network-network-server-internet-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.5v3m-5 0h10"></svg:path><svg:circle cx="7" cy="5.5" r="5"></svg:circle><svg:path d="M2 5.5h10m-5 5c3-3.42 3-6.76 0-10c-2.94 3.12-3 6.44 0 10Z"></svg:path></svg:g>`,
})
export class StreamlineComputerConnectionNetworkNetworkServerInternetEthernetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionSignalLoadingBracketLoadingInternetAngleSignalServerNetworkConnectingIcon],svg[streamline-computer-connection-signal-loading-bracket-loading-internet-angle-signal-server-network-connecting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 9.5L.5 7L3 4.5m8 5L13.5 7L11 4.5"></svg:path><svg:circle cx="9" cy="7" r=".5"></svg:circle><svg:circle cx="5" cy="7" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerConnectionSignalLoadingBracketLoadingInternetAngleSignalServerNetworkConnectingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionUsbCableCablesCableDeviceCordComputerElectronicsCordsUsbIcon],svg[streamline-computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V11M4.5 4V1.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V4m1 0h-7a.5.5 0 0 0-.5.5v2.59a1 1 0 0 0 .29.7L4.5 9v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9l1.21-1.21a1 1 0 0 0 .29-.7V4.5a.5.5 0 0 0-.5-.5Zm-4 2.5h1"></svg:path>`,
})
export class StreamlineComputerConnectionUsbCableCablesCableDeviceCordComputerElectronicsCordsUsbIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionUsbPortCablesCableDeviceComputerPortElectronicsCordsCordUsbIcon],svg[streamline-computer-connection-usb-port-cables-cable-device-computer-port-electronics-cords-cord-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.97" cy="11.5" r="2"></svg:circle><svg:path d="M6.97 9.5v-9M5.47 2L6.97.5L8.47 2M6 9.78a4.14 4.14 0 0 1-2.6-2.29"></svg:path><svg:circle cx="3.22" cy="6.25" r="1.25"></svg:circle><svg:path d="M7 8.6a5.6 5.6 0 0 0 3.49-3.07"></svg:path><svg:circle cx="10.78" cy="4.32" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineComputerConnectionUsbPortCablesCableDeviceComputerPortElectronicsCordsCordUsbIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionWifiWirelessWifiInternetServerNetworkIcon],svg[streamline-computer-connection-wifi-wireless-wifi-internet-server-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="10.94" r="1.31"></svg:circle><svg:path d="M4.53 8a3.49 3.49 0 0 1 5 0M2.36 6.31a6.55 6.55 0 0 1 9.29 0"></svg:path><svg:path d="M.5 4.45a9.19 9.19 0 0 1 13 0"></svg:path></svg:g>`,
})
export class StreamlineComputerConnectionWifiWirelessWifiInternetServerNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerController1RemoteQuadcopterDronesFlyingDroneControlControllerTechnologyFlyIcon],svg[streamline-computer-controller-1-remote-quadcopter-drones-flying-drone-control-controller-technology-fly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M7 5.5v-5"></svg:path><svg:circle cx="10" cy="9.5" r="1.5"></svg:circle><svg:circle cx="4" cy="9.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineComputerController1RemoteQuadcopterDronesFlyingDroneControlControllerTechnologyFlyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDatabaseRaidStorageCodeDiskProgrammingDatabaseArrayHardDiscIcon],svg[streamline-computer-database-raid-storage-code-disk-programming-database-array-hard-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="7" cy="3" rx="6.5" ry="2.5"></svg:ellipse><svg:path d="M.5 3v8c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V3"></svg:path><svg:path d="M13.5 7c0 1.38-2.91 2.5-6.5 2.5S.5 8.38.5 7"></svg:path></svg:g>`,
})
export class StreamlineComputerDatabaseRaidStorageCodeDiskProgrammingDatabaseArrayHardDiscIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDatabaseServer1ServerNetworkInternetIcon],svg[streamline-computer-database-server-1-server-network-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="6" x=".5" y="1" rx="1"></svg:rect><svg:circle cx="3.5" cy="4" r=".5"></svg:circle><svg:path d="M7.5 4H11M1.5 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path><svg:circle cx="3.5" cy="10" r=".5"></svg:circle><svg:path d="M7.5 10H11"></svg:path></svg:g>`,
})
export class StreamlineComputerDatabaseServer1ServerNetworkInternetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDatabaseServer2ServerNetworkInternetIcon],svg[streamline-computer-database-server-2-server-network-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="5" x=".5" y=".5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="currentColor" d="M3.25 2.25A.75.75 0 1 0 4 3a.76.76 0 0 0-.75-.75Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 3h2M1.5 5.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M3.25 7.25A.75.75 0 1 0 4 8a.76.76 0 0 0-.75-.75Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 8h2m-1 2.5v3m-5 0h10"></svg:path>`,
})
export class StreamlineComputerDatabaseServer2ServerNetworkInternetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDatabaseServer3ServerNetworkInternetIcon],svg[streamline-computer-database-server-3-server-network-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="6" x=".5" y="3" rx="1"></svg:rect><svg:circle cx="3.5" cy="6" r=".5"></svg:circle><svg:path d="M6.5 6h2M7 9v4.5m-5 0h10"></svg:path></svg:g>`,
})
export class StreamlineComputerDatabaseServer3ServerNetworkInternetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopAddDesktopDeviceDisplayAddPlusComputerIcon],svg[streamline-computer-desktop-add-desktop-device-display-add-plus-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6m-.5-7h-5M7 4v5"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopAddDesktopDeviceDisplayAddPlusComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopBlockDesktopDeviceDisplayDisablePermissionComputerIcon],svg[streamline-computer-desktop-block-desktop-device-display-disable-permission-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:circle cx="7" cy="5" r="3"></svg:circle><svg:path d="m4.88 7.12l4.24-4.24"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopBlockDesktopDeviceDisplayDisablePermissionComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopCheckSuccessApproveDeviceDisplayDesktopComputerIcon],svg[streamline-computer-desktop-check-success-approve-device-display-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6M4.5 7l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopCheckSuccessApproveDeviceDisplayDesktopComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopDeleteDeviceRemoveDisplayComputerDenyDesktopFailFailureIcon],svg[streamline-computer-desktop-delete-device-remove-display-computer-deny-desktop-fail-failure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6m-1-5l-4-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopDeleteDeviceRemoveDisplayComputerDenyDesktopFailFailureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopFavoriteHeartDeviceDisplayComputerFavoriteLikeHeartDesktopIcon],svg[streamline-computer-desktop-favorite-heart-device-display-computer-favorite-like-heart-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6M13 2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2"></svg:path><svg:path d="M7 4c1.17-2.59 3.5-1.29 3.5.65C10.5 7.2 7 8.5 7 8.5S3.5 7.2 3.5 4.6C3.5 2.66 5.83 1.36 7 4Z"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopFavoriteHeartDeviceDisplayComputerFavoriteLikeHeartDesktopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopFavoriteStarComputerDesktopDeviceDisplayLikeFavoriteStarIcon],svg[streamline-computer-desktop-favorite-star-computer-desktop-device-display-like-favorite-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M6.45 2.36a.59.59 0 0 1 1.1 0L8.19 4H9.9a.61.61 0 0 1 .56.39a.59.59 0 0 1-.16.61L8.79 6.34l.64 1.28a.58.58 0 0 1-.12.69a.59.59 0 0 1-.7.1L7 7.53l-1.61.88a.59.59 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 5a.59.59 0 0 1-.16-.65A.61.61 0 0 1 4.1 4h1.71Z"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopFavoriteStarComputerDesktopDeviceDisplayLikeFavoriteStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopHelpDeviceHelpInformationDisplayComputerDesktopQuestionInfoIcon],svg[streamline-computer-desktop-help-device-help-information-display-computer-desktop-question-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 2h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1m4 9l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 2.5a2 2 0 1 1 2 2v1"></svg:path><svg:path fill="currentColor" d="M7 7.5a.75.75 0 1 0 .75.75A.75.75 0 0 0 7 7.5Z"></svg:path>`,
})
export class StreamlineComputerDesktopHelpDeviceHelpInformationDisplayComputerDesktopQuestionInfoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopLockDeviceSecureDisplayComputerLockDesktopPadlockSecurityIcon],svg[streamline-computer-desktop-lock-device-secure-display-computer-lock-desktop-padlock-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h2.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M5 5.5h4v3H5zm.5 0v-1a1.5 1.5 0 0 1 3 0v1"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopLockDeviceSecureDisplayComputerLockDesktopPadlockSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopRemoveDesktopDeviceSubtractDisplayMinusComputerIcon],svg[streamline-computer-desktop-remove-desktop-device-subtract-display-minus-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6m-.5-7h-5"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopRemoveDesktopDeviceSubtractDisplayMinusComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopScreenDeviceDisplayComputerDesktopElectronicsMonitorKeyboardIcon],svg[streamline-computer-desktop-screen-device-display-computer-desktop-electronics-monitor-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="8" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="M12.28 11.05a1 1 0 0 0-.9-.55H2.62a1 1 0 0 0-.9.55l-.5 1a1 1 0 0 0 .05 1a1 1 0 0 0 .85.47h9.76a1 1 0 0 0 .85-.47a1 1 0 0 0 0-1ZM1.5 6h11"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopScreenDeviceDisplayComputerDesktopElectronicsMonitorKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopSettingSettingsDesktopDisplayDeviceGearCogComputerIcon],svg[streamline-computer-desktop-setting-settings-desktop-display-device-gear-cog-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 2h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1m4 9l-1 2.5M8 11l1 2.5m-5 0h6M7.03 2v1.5M4 3.75l1.3.75M4 7.25l1.3-.75M7.03 9V7.5m3.03-.25l-1.3-.75m1.3-2.75l-1.3.75"></svg:path><svg:circle cx="7.03" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineComputerDesktopSettingSettingsDesktopDisplayDeviceGearCogComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopWarningAlertDesktopDisplayDeviceWarningNotificationComputerIcon],svg[streamline-computer-desktop-warning-alert-desktop-display-device-warning-notification-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2h-2.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6m-3-12V5"></svg:path><svg:circle cx="7" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerDesktopWarningAlertDesktopDisplayDeviceWarningNotificationComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerHandHeldTabletKindleDeviceElectronicsIpadComputerIcon],svg[streamline-computer-hand-held-tablet-kindle-device-electronics-ipad-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="13" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="M1.5 10.5h11M4.5 3h5m-5 2.5h5M4.5 8h3"></svg:path></svg:g>`,
})
export class StreamlineComputerHandHeldTabletKindleDeviceElectronicsIpadComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardAltWindowsKeyboardKeyAltPcIcon],svg[streamline-computer-keyboard-alt-windows-keyboard-key-alt-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5v-1a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v1m0 9v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.75M10.5 5h3M12 5v4M6.5 5v4h2m-5 0V6.5a1.5 1.5 0 0 0-3 0V9m0-1.5h3"></svg:path>`,
})
export class StreamlineComputerKeyboardAltWindowsKeyboardKeyAltPcIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardAsterisk2AsteriskStarKeyboardIcon],svg[streamline-computer-keyboard-asterisk-2-asterisk-star-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5m10-5.5l-7 11m0-11l7 11"></svg:path>`,
})
export class StreamlineComputerKeyboardAsterisk2AsteriskStarKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardCommandKeyboardMacCommandAppleIcon],svg[streamline-computer-keyboard-command-keyboard-mac-command-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.75 10A1.75 1.75 0 1 1 10 11.75v-9.5A1.75 1.75 0 1 1 11.75 4h-9.5A1.75 1.75 0 1 1 4 2.25v9.5A1.75 1.75 0 1 1 2.25 10Z"></svg:path>`,
})
export class StreamlineComputerKeyboardCommandKeyboardMacCommandAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardComputerKeyboardDeviceElectronicsDvorakQwertyIcon],svg[streamline-computer-keyboard-computer-keyboard-device-electronics-dvorak-qwerty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M3.5 10.75h7m-7-2.5h7m-7-2.75v-1a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardComputerKeyboardDeviceElectronicsDvorakQwertyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardDeleteDeleteBackspaceKeyboardIcon],svg[streamline-computer-keyboard-delete-delete-backspace-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M10.5 9h-5l-2-2l2-2h5v4z"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardDeleteDeleteBackspaceKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardEjectEjectKeyboardUnmountDismountRemoveIcon],svg[streamline-computer-keyboard-eject-eject-keyboard-unmount-dismount-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 10h7m-7-2.5h7L7 3.5l-3.5 4z"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardEjectEjectKeyboardUnmountDismountRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardOptionKeyboardOptionMacAppleIcon],svg[streamline-computer-keyboard-option-keyboard-option-mac-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 6h2L8 9h2.5m-2-3h2"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardOptionKeyboardOptionMacAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPowerOffPowerKeyboardButtonOnOffIcon],svg[streamline-computer-keyboard-power-off-power-keyboard-button-on-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.5 3.5h-2v2m0-2L7 7m1.57-3.13a3.5 3.5 0 1 1-4.7 4.7"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardPowerOffPowerKeyboardButtonOnOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPrevious1PreviousKeyboardArrowLeftIcon],svg[streamline-computer-keyboard-previous-1-previous-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7h-10M7 3.5L3.5 7L7 10.5m-6.5-7v7"></svg:path>`,
})
export class StreamlineComputerKeyboardPrevious1PreviousKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardPrevious2PreviousKeyboardArrowLeftIcon],svg[streamline-computer-keyboard-previous-2-previous-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M8 5L6 7l2 2M6 7h4.5m-7-2.5v5"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardPrevious2PreviousKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardReturn1KeyboardArrowReturnEnterIcon],svg[streamline-computer-keyboard-return-1-keyboard-arrow-return-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.5h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4"></svg:path><svg:path d="m3.5 7.5l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardReturn1KeyboardArrowReturnEnterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardReturn2KeyboardArrowReturnEnterIcon],svg[streamline-computer-keyboard-return-2-keyboard-arrow-return-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 9.5h9a4 4 0 0 0 0-8h-3"></svg:path><svg:path d="m3.5 6.5l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardReturn2KeyboardArrowReturnEnterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardReturn3EnterReturnKeyboardIcon],svg[streamline-computer-keyboard-return-3-enter-return-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="m5.5 10.5l-2-2l2-2"></svg:path><svg:path d="M3.5 8.5h5a1 1 0 0 0 1-1v-3"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardReturn3EnterReturnKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardShiftKeyboardKeyShiftUpArrowIcon],svg[streamline-computer-keyboard-shift-keyboard-key-shift-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M8.5 10.5v-3h2L7 3.5l-3.5 4h2v3h3z"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardShiftKeyboardKeyShiftUpArrowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerKeyboardWirelessRemoteDeviceComputerWirelessElectronicsQwertyKeyboardBluetoothIcon],svg[streamline-computer-keyboard-wireless-remote-device-computer-wireless-electronics-qwerty-keyboard-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="3" rx="1"></svg:rect><svg:path d="M3.5 8.25h7m-7-2.5h7"></svg:path></svg:g>`,
})
export class StreamlineComputerKeyboardWirelessRemoteDeviceComputerWirelessElectronicsQwertyKeyboardBluetoothIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLaptopDeviceLaptopElectronicsComputerNotebookIcon],svg[streamline-computer-laptop-device-laptop-electronics-computer-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 8L.72 10.55a1 1 0 0 0 .05 1a1 1 0 0 0 .85.47h10.76a1 1 0 0 0 .85-.47a1 1 0 0 0 0-1L11.5 8m-8-6a1 1 0 0 0-1 1v5h9V3a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class StreamlineComputerLaptopDeviceLaptopElectronicsComputerNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoAppleOsSystemAppleIcon],svg[streamline-computer-logo-apple-os-system-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 7.5a2.49 2.49 0 0 1 1.74-2.37a2.91 2.91 0 0 0-4.22-1a1 1 0 0 1-1 0a3.09 3.09 0 0 0-4.41 1.21a5.13 5.13 0 0 0-.54 3.36a7.25 7.25 0 0 0 1.94 4.21a2.09 2.09 0 0 0 2.7.15h0a1.32 1.32 0 0 1 1.57 0a2.06 2.06 0 0 0 2.66-.06a6.58 6.58 0 0 0 1.7-3a2.48 2.48 0 0 1-2.14-2.5Zm-2-5.5L9.68.5"></svg:path>`,
})
export class StreamlineComputerLogoAppleOsSystemAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoFacebook1MediaFacebookSocialIcon],svg[streamline-computer-logo-facebook-1-media-facebook-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.61.61 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.62.62 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1Z"></svg:path>`,
})
export class StreamlineComputerLogoFacebook1MediaFacebookSocialIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoFacebook2MediaFacebookSocialIcon],svg[streamline-computer-logo-facebook-2-media-facebook-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4c0-1 .5-1 1-1h.6a.75.75 0 0 0 .76-.76V1.3a.76.76 0 0 0-.77-.76L8.17.52a2.86 2.86 0 0 0-2.95 3.2v1.45h-.79a.76.76 0 0 0-.76.76v.94a.76.76 0 0 0 .76.76h.79V13a.5.5 0 0 0 .5.5h1.81A.5.5 0 0 0 8 13V7.63h.88a.76.76 0 0 0 .76-.76v-.94a.76.76 0 0 0-.76-.76H8Z"></svg:path>`,
})
export class StreamlineComputerLogoFacebook2MediaFacebookSocialIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoGoogleMediaGoogleSocialIcon],svg[streamline-computer-logo-google-media-google-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.36 5.83H8.87a.51.51 0 0 0-.51.52v1.41a.51.51 0 0 0 .51.51h1.29a2.75 2.75 0 0 1-3 2.79c-2.24 0-3.32-1.9-3.32-4.06S5 2.94 7.16 2.94a4.07 4.07 0 0 1 2.64.86a.49.49 0 0 0 .72-.22l.63-1.44a.51.51 0 0 0-.15-.63a7.07 7.07 0 0 0-3.8-1C3.56.5 1.08 3.33 1.08 7s2.49 6.5 6.08 6.5s5.76-2.56 5.76-6c0-1.1-.44-1.67-1.56-1.67Z"></svg:path>`,
})
export class StreamlineComputerLogoGoogleMediaGoogleSocialIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoLinkedinNetworkLinkedinProfessionalIcon],svg[streamline-computer-logo-linkedin-network-linkedin-professional-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.54 1.71a1.33 1.33 0 0 1-1.3 1.34A1.36 1.36 0 0 1 .93 1.71A1.34 1.34 0 0 1 2.24.43a1.33 1.33 0 0 1 1.3 1.28ZM1.07 5.43c0-.77.49-.65 1.17-.65s1.16-.12 1.16.65v7.5c0 .78-.49.62-1.16.62s-1.17.16-1.17-.62Zm4.35 0c0-.43.16-.59.41-.64s1.11 0 1.41 0s.42.49.41.86a2.51 2.51 0 0 1 2.24-1a3 3 0 0 1 3.18 3.13v5.12c0 .78-.48.62-1.16.62s-1.16.16-1.16-.62v-4a1.44 1.44 0 0 0-1.52-1.56a1.45 1.45 0 0 0-1.48 1.59v4c0 .78-.49.62-1.17.62s-1.16.16-1.16-.62Z"></svg:path>`,
})
export class StreamlineComputerLogoLinkedinNetworkLinkedinProfessionalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoPaypalPaymentPaypalIcon],svg[streamline-computer-logo-paypal-payment-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.62 1.59L3.6.51a.49.49 0 0 0-.6.37L1.64 7.29L.63 12a.49.49 0 0 0 .37.58l1.2.26a.49.49 0 0 0 .58-.38l1-4.68l3.44.74a3.52 3.52 0 0 0 4.26-3.43a3.59 3.59 0 0 0-2.86-3.5ZM7.26 6.25l-3-.65l.55-2.6l3 .65a1.32 1.32 0 0 1-.56 2.58Z"></svg:path><svg:path d="m5.16 13.5l.62-2.9l3 .63c2.24.49 4.6-1.86 4.63-4.29a3.62 3.62 0 0 0-.2-1.19"></svg:path></svg:g>`,
})
export class StreamlineComputerLogoPaypalPaymentPaypalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoSkypeVideoMeetingSkypeIcon],svg[streamline-computer-logo-skype-video-meeting-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.87 8.63l-.09-.07A6.1 6.1 0 0 0 13 7a6 6 0 0 0-6-6a6.1 6.1 0 0 0-1.55.21l-.07-.09a2.78 2.78 0 0 0-3.89.35a2.78 2.78 0 0 0-.35 3.89l.08.06A5.91 5.91 0 0 0 1 7a6 6 0 0 0 6 6a5.91 5.91 0 0 0 1.58-.22l.06.08a2.78 2.78 0 0 0 3.89-.35a2.78 2.78 0 0 0 .34-3.88Z"></svg:path><svg:path fill="currentColor" d="M7.15 4.07c.42 0 1.45.15 1.45.74a.51.51 0 0 1-.49.54c-.31 0-.54-.22-1-.22s-.6.17-.6.48C6.52 6.38 9 5.89 9 7.8a1.76 1.76 0 0 1-1.9 1.71c-.57 0-1.79-.13-1.79-.83a.49.49 0 0 1 .49-.52c.35 0 .76.29 1.25.29a.66.66 0 0 0 .75-.64c0-.87-2.47-.35-2.47-2.06a1.71 1.71 0 0 1 1.82-1.68m0-1a2.7 2.7 0 0 0-2.83 2.68A2.09 2.09 0 0 0 5 7.38a1.52 1.52 0 0 0-.7 1.3c0 1.13 1.07 1.83 2.79 1.83A2.75 2.75 0 0 0 10 7.8a2.33 2.33 0 0 0-.83-1.88a1.59 1.59 0 0 0 .43-1.11c0-1.2-1.27-1.74-2.45-1.74Z"></svg:path>`,
})
export class StreamlineComputerLogoSkypeVideoMeetingSkypeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoWindows1OsSystemMicrosoftIcon],svg[streamline-computer-logo-windows-1-os-system-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.94 2l12-1.38a.49.49 0 0 1 .56.49v11.82a.5.5 0 0 1-.58.49l-12-1.84a.51.51 0 0 1-.42-.5V2.46A.5.5 0 0 1 .94 2ZM6 1.38v10.98m7.5-5.6H.5"></svg:path>`,
})
export class StreamlineComputerLogoWindows1OsSystemMicrosoftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoWindows2OsSystemMicrosoftIcon],svg[streamline-computer-logo-windows-2-os-system-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 5.82h6.5v-4.5a.49.49 0 0 0-.56-.49L7 1.54Zm-2 0V1.71l-4.06.5a.5.5 0 0 0-.44.5v3.11Zm0 2H.5v3a.51.51 0 0 0 .42.5L5 12Zm2 0v4.4l5.92.95a.5.5 0 0 0 .58-.49V7.82Z"></svg:path>`,
})
export class StreamlineComputerLogoWindows2OsSystemMicrosoftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoYoutubeYoutubeClipSocialVideoIcon],svg[streamline-computer-logo-youtube-youtube-clip-social-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="10" x=".5" y="2" rx="2"></svg:rect><svg:path d="M5.31 9.32v-4.2a.39.39 0 0 1 .6-.34l3.6 2.1a.4.4 0 0 1 0 .69l-3.6 2.1a.4.4 0 0 1-.6-.35Z"></svg:path></svg:g>`,
})
export class StreamlineComputerLogoYoutubeYoutubeClipSocialVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerMonitorScreenDesktopMonitorDeviceElectronicsDisplayComputerIcon],svg[streamline-computer-monitor-screen-desktop-monitor-device-electronics-display-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 5.5h1.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9"></svg:path><svg:rect width="8" height="6" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M4.5 11.5v2m-2 0h4"></svg:path></svg:g>`,
})
export class StreamlineComputerMonitorScreenDesktopMonitorDeviceElectronicsDisplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerMouseComputerDeviceElectronicsMouseIcon],svg[streamline-computer-mouse-computer-device-electronics-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7" height="10.5" x="1" y="3" rx="3.5"></svg:rect><svg:path d="M1 7h7M4.5 7V2.75A2.25 2.25 0 0 1 6.75.5h0A2.25 2.25 0 0 1 9 2.75V3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V1.5"></svg:path></svg:g>`,
})
export class StreamlineComputerMouseComputerDeviceElectronicsMouseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerMouseWirelessRemoteWirelessDeviceElectronicsMouseComputerIcon],svg[streamline-computer-mouse-wireless-remote-wireless-device-electronics-mouse-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="13" x="2.5" y=".5" rx="4.5"></svg:rect><svg:path d="M7 3.5V5"></svg:path></svg:g>`,
})
export class StreamlineComputerMouseWirelessRemoteWirelessDeviceElectronicsMouseComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerPcDesktopIcon],svg[streamline-computer-pc-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 6.5v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m2.5 7h3m-1.5 0v-2"></svg:path><svg:path d="M7.5 3.5V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9"></svg:path><svg:path d="M11.375 4.875a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25M10.5 7h3"></svg:path></svg:g>`,
})
export class StreamlineComputerPcDesktopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerPrinterScanDeviceElectronicsPrinterPrintComputerIcon],svg[streamline-computer-printer-scan-device-electronics-printer-print-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h2"></svg:path><svg:path d="M3.5 9.5V13a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V9.5Zm7-5V1a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v3.5M11 7h-1"></svg:path></svg:g>`,
})
export class StreamlineComputerPrinterScanDeviceElectronicsPrinterPrintComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerRobotCyborgArtificialRoboticsRobotIntelligenceMachineTechnologyAndroidIcon],svg[streamline-computer-robot-cyborg-artificial-robotics-robot-intelligence-machine-technology-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 9.5c0-3-2.46-5-5.5-5s-5.5 2-5.5 5v4h11ZM7 4.5v-4m-5.5 10h11m-7.5 0v3m4-3v3"></svg:path><svg:circle cx="5" cy="8" r=".5"></svg:circle><svg:circle cx="9" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerRobotCyborgArtificialRoboticsRobotIntelligenceMachineTechnologyAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputerIcon],svg[streamline-computer-screen-1-screen-device-electronics-monitor-diplay-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2" rx=".5"></svg:rect><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path></svg:g>`,
})
export class StreamlineComputerScreen1ScreenDeviceElectronicsMonitorDiplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreen2ScreenDeviceElectronicsMonitorDiplayComputerIcon],svg[streamline-computer-screen-2-screen-device-electronics-monitor-diplay-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="1.5" rx=".5"></svg:rect><svg:path d="M3.53 13.5a3.51 3.51 0 0 1 6.94 0"></svg:path></svg:g>`,
})
export class StreamlineComputerScreen2ScreenDeviceElectronicsMonitorDiplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreenCurveScreenCurvedDeviceElectronicsMonitorDiplayComputerIcon],svg[streamline-computer-screen-curve-screen-curved-device-electronics-monitor-diplay-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.93 11.34a42.07 42.07 0 0 0-11.86 0a.5.5 0 0 1-.57-.49V2.49A.49.49 0 0 1 1.07 2a42.83 42.83 0 0 0 11.86 0a.49.49 0 0 1 .57.48v8.36a.5.5 0 0 1-.57.5ZM7 10.92v2.5m-2.5 0h5"></svg:path>`,
})
export class StreamlineComputerScreenCurveScreenCurvedDeviceElectronicsMonitorDiplayComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerScreenTvMoviesTelevisionCathodeCrtTvRayTubeVintageVideoIcon],svg[streamline-computer-screen-tv-movies-television-cathode-crt-tv-ray-tube-vintage-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="10.5" x=".5" y="3" rx="1"></svg:rect><svg:rect width="8" height="5.5" x="3" y="5.5" rx="1"></svg:rect><svg:path d="M5 .5L7 3L9 .5"></svg:path></svg:g>`,
})
export class StreamlineComputerScreenTvMoviesTelevisionCathodeCrtTvRayTubeVintageVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerSmartWatch1DeviceTimepieceCirleComputerElectronicsFaceBlankWatchSmartIcon],svg[streamline-computer-smart-watch-1-device-timepiece-cirle-computer-electronics-face-blank-watch-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="3.5"></svg:circle><svg:path d="M9 4.13V1.5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2.63m4 5.74v2.63a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9.87"></svg:path></svg:g>`,
})
export class StreamlineComputerSmartWatch1DeviceTimepieceCirleComputerElectronicsFaceBlankWatchSmartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerSmartWatch2DeviceSquareTimepieceComputerElectronicsFaceBlankWatchSmartIcon],svg[streamline-computer-smart-watch-2-device-square-timepiece-computer-electronics-face-blank-watch-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 3.5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2m4 7v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2"></svg:path><svg:rect width="7" height="7" x="3.5" y="3.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineComputerSmartWatch2DeviceSquareTimepieceComputerElectronicsFaceBlankWatchSmartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerStorageFloppyDiskDiskFloppyElectronicsDeviceDiscComputerIcon],svg[streamline-computer-storage-floppy-disk-disk-floppy-electronics-device-disc-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4.91a1 1 0 0 1 .29-.7L4.21.79a1 1 0 0 1 .7-.29h7.59a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M10.5 13.5V9a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v4.5m7-13V4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V.5"></svg:path></svg:g>`,
})
export class StreamlineComputerStorageFloppyDiskDiskFloppyElectronicsDeviceDiscComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerStorageHardDiskDeviceDiscDriveComputerDiskElectronicsPlatterTurntableRaidIcon],svg[streamline-computer-storage-hard-disk-device-disc-drive-computer-disk-electronics-platter-turntable-raid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="13" x="1.5" y=".5" rx="1"></svg:rect><svg:path d="m4.5 10.5l1.75-2.75M4.09 7A2.93 2.93 0 0 1 4 5.16a3 3 0 1 1 4.67 3.27M7.5 11H10"></svg:path></svg:g>`,
})
export class StreamlineComputerStorageHardDiskDeviceDiscDriveComputerDiskElectronicsPlatterTurntableRaidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerStorageHardDrive1DiskComputerDeviceElectronicsDiscDriveRaidIcon],svg[streamline-computer-storage-hard-drive-1-disk-computer-device-electronics-disc-drive-raid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="6" x=".5" y="7.5" rx="1"></svg:rect><svg:path d="m.59 8.08l1.74-6.8A1 1 0 0 1 3.3.5h7.4a1 1 0 0 1 1 .78l1.74 6.8M3.5 10.5h3"></svg:path><svg:circle cx="10.5" cy="10.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerStorageHardDrive1DiskComputerDeviceElectronicsDiscDriveRaidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerStorageHardDrive2DiskComputerDeviceElectronicsDiscDriveRaidIcon],svg[streamline-computer-storage-hard-drive-2-disk-computer-device-electronics-disc-drive-raid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 13.5a3 3 0 0 0 0-6h-7a3 3 0 0 0 0 6Z"></svg:path><svg:path d="M.58 9.79L2.17 2.1a2 2 0 0 1 2-1.6h5.7a2 2 0 0 1 2 1.6l1.59 7.69m-9.96.71h3"></svg:path><svg:circle cx="10.5" cy="10.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerStorageHardDrive2DiskComputerDeviceElectronicsDiscDriveRaidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerVirtualRealityGamingVirtualGearControllerRealityGamesHeadsetTechnologyVrEyewearIcon],svg[streamline-computer-virtual-reality-gaming-virtual-gear-controller-reality-games-headset-technology-vr-eyewear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.5H.5v5a1 1 0 0 0 1 1h3a1 1 0 0 0 .78-.38l1.31-1.63a.5.5 0 0 1 .78 0l1.33 1.63a1 1 0 0 0 .78.38h3a1 1 0 0 0 1-1Zm0 0L10.79 2a1 1 0 0 0-.86-.49H4.07a1 1 0 0 0-.86.49L.5 6.5"></svg:path>`,
})
export class StreamlineComputerVirtualRealityGamingVirtualGearControllerRealityGamesHeadsetTechnologyVrEyewearIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerVoiceMailMicAudioMikeMusicMicrophoneIcon],svg[streamline-computer-voice-mail-mic-audio-mike-music-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 6.5a2.5 2.5 0 0 1-5 0V3a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path d="M12 7h0a4.49 4.49 0 0 1-4.5 4.5h-1A4.49 4.49 0 0 1 2 7h0m5 4.5v2"></svg:path></svg:g>`,
})
export class StreamlineComputerVoiceMailMicAudioMikeMusicMicrophoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerVoiceMailOffMicAudioMikeMusicMicrophoneMuteOffIcon],svg[streamline-computer-voice-mail-off-mic-audio-mike-music-microphone-mute-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-8 8a2.49 2.49 0 0 1-1-2V3a2.5 2.5 0 0 1 5 0v1.5m-.23 3.04A2.5 2.5 0 0 1 8 8.79m-4.42 1.63A4.46 4.46 0 0 1 2 7h0m10 0h0a4.49 4.49 0 0 1-4.5 4.5h-1a5.25 5.25 0 0 1-.56 0m1.06 0v2"></svg:path>`,
})
export class StreamlineComputerVoiceMailOffMicAudioMikeMusicMicrophoneMuteOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerWebcamVideoWorkVideoMeetingCameraCompanyConferenceOfficeIcon],svg[streamline-computer-webcam-video-work-video-meeting-camera-company-conference-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.82 3.75L10 5V3.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1V9l2.82 1.25a.5.5 0 0 0 .68-.47V4.22a.5.5 0 0 0-.68-.47Z"></svg:path>`,
})
export class StreamlineComputerWebcamVideoWorkVideoMeetingCameraCompanyConferenceOfficeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerWebcamWebcamCameraFutureTechChatSkypeTechnologyVideoIcon],svg[streamline-computer-webcam-webcam-camera-future-tech-chat-skype-technology-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="6.52" r="6"></svg:circle><svg:path d="M10.07 11.68a7.4 7.4 0 0 1 2.48 1.8m-11.1 0a7.4 7.4 0 0 1 2.48-1.8"></svg:path><svg:circle cx="7" cy="6.52" r="3"></svg:circle><svg:circle cx="7" cy="6.52" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerWebcamWebcamCameraFutureTechChatSkypeTechnologyVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineConeShapeIcon],svg[streamline-cone-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.852 13.38c3.041 0 5.507-1.01 5.507-2.256S9.893 8.868 6.852 8.868c-3.042 0-5.508 1.01-5.508 2.256S3.81 13.38 6.852 13.38"></svg:path><svg:path d="M1.418 10.718L6.488.872c.174-.336.555-.336.728 0l5.07 9.85"></svg:path></svg:g>`,
})
export class StreamlineConeShapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineContactPhonebook2Icon],svg[streamline-contact-phonebook-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.422 13.424h-9.33a1.473 1.473 0 1 1 0-2.947h8.348a.98.98 0 0 0 .982-.982V1.638a.98.98 0 0 0-.982-.982H3.092A1.473 1.473 0 0 0 1.62 2.09v9.821m9.82-1.434v2.947"></svg:path><svg:path d="M7.524 8.236a1.7 1.7 0 0 0 1.957-.461l.246-.247a.533.533 0 0 0 .096-.732l-.796-.795a.533.533 0 0 0-.732.095a.533.533 0 0 1-.731.095L6.29 4.92a.533.533 0 0 1 .095-.732a.533.533 0 0 0 .096-.732l-.796-.796a.533.533 0 0 0-.732.096L4.708 3a1.71 1.71 0 0 0-.462 1.957a9.55 9.55 0 0 0 3.278 3.278Z"></svg:path></svg:g>`,
})
export class StreamlineContactPhonebook2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineContainerIcon],svg[streamline-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.75 11.5v-9H1.25v9zm.75-9H.5m13 9H.5M4 5v4m3-4v4m3-4v4"></svg:path>`,
})
export class StreamlineContainerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineControllerIcon],svg[streamline-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.4 7v2.31m1.156-1.154H3.245m-1.989-.963l-.412 3.71a2.283 2.283 0 0 0 4.311 1.272l.36-.718h2.97l.36.718a2.283 2.283 0 0 0 4.31-1.273l-.411-3.71a3 3 0 0 0-2.982-2.668H4.238a3 3 0 0 0-2.982 2.669"></svg:path><svg:path d="M7 4.524v-.98a1 1 0 0 1 1-1h1.466a1 1 0 0 0 1-1V.561m0 6.934a.248.248 0 0 1 0-.495m0 .495a.248.248 0 1 0 0-.495M8.733 8.733a.248.248 0 0 1 .495 0m-.495 0a.248.248 0 0 0 .495 0"></svg:path></svg:g>`,
})
export class StreamlineControllerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineController1Icon],svg[streamline-controller-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M4.4 5.02v2.31m1.156-1.155H3.245"></svg:path><svg:path d="m1.256 5.212l-.412 3.71a2.283 2.283 0 0 0 4.311 1.273l.36-.72h2.97l.36.72a2.283 2.283 0 0 0 4.31-1.273l-.411-3.71a3 3 0 0 0-2.982-2.669H4.238a3 3 0 0 0-2.982 2.669Z"></svg:path><svg:path stroke-linecap="round" d="M10.466 5.514a.248.248 0 0 1 0-.495m0 .495a.248.248 0 1 0 0-.495M8.733 6.752a.248.248 0 0 1 .495 0m-.495 0a.248.248 0 1 0 .495 0"></svg:path></svg:g>`,
})
export class StreamlineController1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineControllerWirelessIcon],svg[streamline-controller-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.717 9.666h1.652m-.826-.826v1.652m6.77-3.936H3.78v.005a3.11 3.11 0 1 0 2.344 4.933h1.671a3.11 3.11 0 1 0 2.516-4.938Zm0 0s0 0 0 0"></svg:path><svg:path d="M9.367 10.742a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m1.687-1.25a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M3.196 1.45C3.672 1.135 5.098.5 7 .5s3.328.634 3.804.95M5.098 3.828C5.415 3.67 6.24 3.353 7 3.353s1.585.317 1.902.475"></svg:path></svg:g>`,
})
export class StreamlineControllerWirelessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineConvertPdf2Icon],svg[streamline-convert-pdf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M5.3 3.517C4.006 3.9 9.4 10.4 9.975 8.913s-7.085.43-5.823 1.487S6.593 3.133 5.3 3.517"></svg:path></svg:g>`,
})
export class StreamlineConvertPdf2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCopyPasteIcon],svg[streamline-copy-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 3.5v-1a1 1 0 0 0-1-1h-1m-2.5 9H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1m10 4h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M6.75.5h-4.5l.41 1.62a.49.49 0 0 0 .48.38h2.72a.49.49 0 0 0 .48-.38zm1.75 8h3m-3 2h3"></svg:path>`,
})
export class StreamlineCopyPasteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCreativeCommonsIcon],svg[streamline-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M6.046 5.6a1.05 1.05 0 0 0-.99-.7h-.7c-.58 0-1.05.47-1.05 1.05v2.1c0 .58.47 1.05 1.05 1.05h.7c.457 0 .846-.292.99-.7m4.648-2.8a1.05 1.05 0 0 0-.99-.7h-.7c-.58 0-1.05.47-1.05 1.05v2.1c0 .58.47 1.05 1.05 1.05h.7c.457 0 .846-.292.99-.7"></svg:path></svg:g>`,
})
export class StreamlineCreativeCommonsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCreditCard1Icon],svg[streamline-credit-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.25h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1m-12 3.5h13m-4 3.5H11"></svg:path>`,
})
export class StreamlineCreditCard1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCreditCard2Icon],svg[streamline-credit-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.75 3h-5.5a.5.5 0 0 0-.5.5v9.375a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M7 9.438a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M1.906 4.583h-.834a.5.5 0 0 1-.35-.146a.5.5 0 0 1-.144-.354v-3A.5.5 0 0 1 .723.73a.5.5 0 0 1 .35-.147h11.855a.496.496 0 0 1 .494.5v3c0 .133-.052.26-.145.354a.5.5 0 0 1-.35.146h-.833M7 5.21a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m0 6.51a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineCreditCard2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCropSelectionIcon],svg[streamline-crop-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5h3a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M3.5.5v9a1 1 0 0 0 1 1h9m-10-7h-3m10 7v3"></svg:path></svg:g>`,
})
export class StreamlineCropSelectionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCrownIcon],svg[streamline-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 4l-3 3L7 2L3.5 7l-3-3v6.5A1.5 1.5 0 0 0 2 12h10a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class StreamlineCrownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCrutchIcon],svg[streamline-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.147 6.832h3.991m-3.104 0V9.68a1.11 1.11 0 0 0 1.11 1.109v0c.612 0 1.108-.497 1.108-1.11V6.833M4.13 10.792v2.138m-.653.016h1.33M8.553 4.65a1.886 1.886 0 1 0 0-3.771a1.886 1.886 0 0 0 0 3.772Z"></svg:path><svg:path d="M6.667 5.243a3.3 3.3 0 0 1 5.186 2.709v1.414H10.44l-.472 3.772h-2.83l-.393-3.146"></svg:path></svg:g>`,
})
export class StreamlineCrutchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCssThreeIcon],svg[streamline-css-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12 10l-5 3.5L2 10L.5.5h13z"></svg:path><svg:path d="M4.5 3.5h5L5.5 6H9v2.5L7 10L5 8.5"></svg:path></svg:g>`,
})
export class StreamlineCssThreeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCurlyBracketsIcon],svg[streamline-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.977 1.125H5.59a1 1 0 0 0-1 1v2.77a2 2 0 0 1-.92 1.684l-.804.515l.803.515a2 2 0 0 1 .921 1.684v2.77a1 1 0 0 0 1 1h.386m2.39-11.938h.386a1 1 0 0 1 1 1v2.77a2 2 0 0 0 .92 1.684l.804.515l-.804.515a2 2 0 0 0-.92 1.684v2.77a1 1 0 0 1-1 1h-.386"></svg:path>`,
})
export class StreamlineCurlyBracketsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCursorClickIcon],svg[streamline-cursor-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></svg:path>`,
})
export class StreamlineCursorClickIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCustomerSupport1Icon],svg[streamline-customer-support-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25"></svg:path>`,
})
export class StreamlineCustomerSupport1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCutIcon],svg[streamline-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.49 10.5h2m2 0h2M2.19 4.93l5.8 3.33M2.75 5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-.56 4.07L13.5 2.55M2.75 13.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class StreamlineCutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCyborgIcon],svg[streamline-cyborg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 9.082c0-3-2.46-4.636-5.5-4.636S1.5 6.082 1.5 9.082v3.364a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1zM7 4.446v-1.5m0-.251a1.07 1.07 0 1 0 0-2.14a1.07 1.07 0 0 0 0 2.14"></svg:path><svg:path d="M12.5 9.946h-.95a1 1 0 0 0-.834.446l-.3.452a1 1 0 0 1-.833.447H4.416a1 1 0 0 1-.833-.447l-.3-.452a1 1 0 0 0-.833-.446H1.5M4.75 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineCyborgIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCyborg2Icon],svg[streamline-cyborg-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.167 1.854a1.167 1.167 0 1 1-2.334 0a1.167 1.167 0 0 1 2.334 0M7 3.02v2.25m1.75 5.48s-.55.583-1.75.583s-1.75-.583-1.75-.583m-.208-2.209a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m3.916.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M1.5 11.313v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class StreamlineCyborg2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDangerousZoneSignIcon],svg[streamline-dangerous-zone-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.89 1.05a1 1 0 0 0-1.78 0l-5.5 11a1 1 0 0 0 .89 1.45h11a1 1 0 0 0 .89-1.45z"></svg:path><svg:path d="m6.696 10.969l2.022-2.767H5.281l2.022-2.766"></svg:path></svg:g>`,
})
export class StreamlineDangerousZoneSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDarkDislayModeIcon],svg[streamline-dark-dislay-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M9.46 4.522a2.46 2.46 0 1 0 0 4.919c.25 0 .441.3.258.47a3.996 3.996 0 1 1 0-5.86c.183.17-.008.471-.258.471"></svg:path></svg:g>`,
})
export class StreamlineDarkDislayModeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDashboard3Icon],svg[streamline-dashboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 6.5H9a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5m0-6H9a.5.5 0 0 0-.5.5v2.01a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5m-8 0H1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V1A.5.5 0 0 0 5 .5m0 9.99H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2.01a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class StreamlineDashboard3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDashboardCircleIcon],svg[streamline-dashboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.25 6a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m7.5 0a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-7.5 7.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m7.5 0a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5"></svg:path>`,
})
export class StreamlineDashboardCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseIcon],svg[streamline-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.5c3.59 0 6.5-1.12 6.5-2.5S10.59.5 7 .5S.5 1.62.5 3S3.41 5.5 7 5.5"></svg:path><svg:path d="M.5 3v8c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V3"></svg:path><svg:path d="M13.5 7c0 1.38-2.91 2.5-6.5 2.5S.5 8.38.5 7"></svg:path></svg:g>`,
})
export class StreamlineDatabaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseCheckIcon],svg[streamline-database-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5 2.76V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1 1.78 1.83 4.19 2.06"></svg:path><svg:path d="M11.5 6C11.5 7.17 9 8.12 6 8.12S.5 7.17.5 6m13 3l-4 4.5l-2-1.5"></svg:path></svg:g>`,
})
export class StreamlineDatabaseCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseLockIcon],svg[streamline-database-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5-.24V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.12 2.24 2 5.08 2.11"></svg:path><svg:path d="M6 8.08C3 8.12.5 7.17.5 6M8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path></svg:g>`,
})
export class StreamlineDatabaseLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseRefreshIcon],svg[streamline-database-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74M11.5 6V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.043 1.94 1.877 4.5 2.076"></svg:path><svg:path d="M6 8.08C3 8.12.5 7.17.5 6m12.9 5.368l-.841.636l-.636-.84"></svg:path><svg:path d="M12.512 11.941a2.58 2.58 0 0 0-3.25-3.585M7.045 10.17l.84-.635l.637.84"></svg:path><svg:path d="M7.932 9.599a2.58 2.58 0 0 0 3.25 3.585"></svg:path></svg:g>`,
})
export class StreamlineDatabaseRefreshIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseRemoveIcon],svg[streamline-database-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 9L9 13.5M9 9l4.5 4.5M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5 2.76V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.17 2.44 2.11 5.5 2.12"></svg:path><svg:path d="M6 8.12C3 8.12.5 7.17.5 6"></svg:path></svg:g>`,
})
export class StreamlineDatabaseRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer1Icon],svg[streamline-database-server-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 1h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4-.5H11M1.5 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 10.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4-.5H11"></svg:path></svg:g>`,
})
export class StreamlineDatabaseServer1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer2Icon],svg[streamline-database-server-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M7.5 3H11M1.5 5.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.25 8.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0-4.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7.5 8H11m-4 2.5v3m-5 0h10"></svg:path></svg:g>`,
})
export class StreamlineDatabaseServer2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseSettingIcon],svg[streamline-database-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5.26V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.071 2.048 1.923 4.71 2.091"></svg:path><svg:path d="M.5 6c0 1.086 2.155 1.983 4.865 2.074M10.47 6.5V8m-3.03.25l1.3.75m-1.3 2.75l1.3-.75m1.73 2.5V12m3.03-.25L12.2 11m1.3-2.75L12.2 9m-1.73 3a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class StreamlineDatabaseSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseSubtract2RaidStorageCodeDiskProgrammingDatabaseArrayHardDiscMinusIcon],svg[streamline-database-subtract-2-raid-storage-code-disk-programming-database-array-hard-disc-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.25 13.5a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5M9 10.25h2.5M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5-.24V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 .93 1.54 1.71 3.69 2"></svg:path><svg:path d="M4.49 8C2.19 7.78.5 7 .5 6"></svg:path></svg:g>`,
})
export class StreamlineDatabaseSubtract2RaidStorageCodeDiskProgrammingDatabaseArrayHardDiscMinusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDecentWorkAndEconomicGrowthIcon],svg[streamline-decent-work-and-economic-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.008 6.709l3.43-1.516v7.672h-3.43zM4.72 4.814l2.144 3.032l2.144-1.137v6.154H4.72z"></svg:path><svg:path d="m1.29 6.33l3.43-1.516v8.05H1.29zm12-5.193L7.851 4.613l-2.5-2.923L.878 3.988"></svg:path><svg:path d="m10.586.678l2.703.45l-.45 2.704"></svg:path></svg:g>`,
})
export class StreamlineDecentWorkAndEconomicGrowthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDefinitionSearchBookIcon],svg[streamline-definition-search-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1l-1.73-1.73M7 2A1.5 1.5 0 0 0 5.5.5h-5v10h5M7 2v4.5M7 2A1.5 1.5 0 0 1 8.5.5h5v7"></svg:path>`,
})
export class StreamlineDefinitionSearchBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDelete1Icon],svg[streamline-delete-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m0-13l13 13"></svg:path>`,
})
export class StreamlineDelete1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDeleteKeyboardIcon],svg[streamline-delete-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.813 10.176a2 2 0 0 0 1.523.703h5.556a2 2 0 0 0 2-2V5.12a2 2 0 0 0-2-2H5.336a2 2 0 0 0-1.523.704l-1.6 1.88a2 2 0 0 0 0 2.593zm2.584-4.989l3.584 3.584M9.98 5.187L6.398 8.771"></svg:path>`,
})
export class StreamlineDeleteKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDescendingNumberOrderIcon],svg[streamline-descending-number-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.167 8.5v5M9.5 9.75h.417c.69 0 1.25-.56 1.25-1.25v0m1.667 5H9.5m.922-10.156h.656a1.422 1.422 0 0 0 0-2.844h-.656a1.422 1.422 0 0 0 0 2.844"></svg:path><svg:path d="M12.5 1.813v2.625c0 .725-.588 1.312-1.312 1.312h-.875a1.31 1.31 0 0 1-1.238-.875M6 11l-2.5 2.5L1 11M3.5.5v13"></svg:path></svg:g>`,
})
export class StreamlineDescendingNumberOrderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopChatIcon],svg[streamline-desktop-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 8v2.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h2m3 9l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M5.5 5.5h3v2l3-2h2v-5h-8z"></svg:path></svg:g>`,
})
export class StreamlineDesktopChatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopCheckIcon],svg[streamline-desktop-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.82 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V5.587M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="m8 3.15l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineDesktopCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopCodeIcon],svg[streamline-desktop-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.5v-8A.5.5 0 0 0 13 2H1c-.265 0-.5.235-.5.5v8c0 .265.235.5.5.5h12c.265 0 .5-.235.5-.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M5 5L3.5 6.5L5 8m4-3l1.5 1.5L9 8"></svg:path></svg:g>`,
})
export class StreamlineDesktopCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopDeleteIcon],svg[streamline-desktop-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.343 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V7M6 11l-1 2.5M8 11l1 2.5m-5 0h6m3.5-8.922l-4-4m4 0l-4 4"></svg:path>`,
})
export class StreamlineDesktopDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopDollarIcon],svg[streamline-desktop-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.76 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M13.424 2.722a1.33 1.33 0 0 0-1.257-.889h-1.032a1.19 1.19 0 0 0-.255 2.353l1.572.344a1.334 1.334 0 0 1-.285 2.637h-.89c-.58 0-1.074-.371-1.257-.89m1.702-4.444V.5m0 8V7.167"></svg:path></svg:g>`,
})
export class StreamlineDesktopDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopEmojiIcon],svg[streamline-desktop-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.5v-8A.5.5 0 0 0 13 2H1c-.265 0-.5.235-.5.5v8c0 .265.235.5.5.5h12c.265 0 .5-.235.5-.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M4.557 7.571C5.033 8.056 5.874 8.5 7 8.5s1.967-.444 2.443-.929M5.25 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDesktopEmojiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopFavoriteStarIcon],svg[streamline-desktop-favorite-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 8.475V10.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h3.541M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="m10.272.653l.836 1.682a.26.26 0 0 0 .214.155l1.857.282a.282.282 0 0 1 .155.486l-1.37 1.303a.27.27 0 0 0 0 .252l.262 1.847a.282.282 0 0 1-.418.301l-1.652-.874a.33.33 0 0 0-.272 0L8.23 6.96a.282.282 0 0 1-.418-.3l.311-1.848a.27.27 0 0 0-.048-.252l-1.37-1.313a.282.282 0 0 1 .155-.476L8.717 2.5a.26.26 0 0 0 .214-.155L9.767.663a.282.282 0 0 1 .505-.01"></svg:path></svg:g>`,
})
export class StreamlineDesktopFavoriteStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopGameIcon],svg[streamline-desktop-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 2h12c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5m5 9l-1 2.5M8 11l1 2.5m-5 0h6m-7-7h3M4.5 5v3"></svg:path><svg:path d="M10.8 6.05a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M9 7.45a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDesktopGameIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopHelpIcon],svg[streamline-desktop-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 6.576V10.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h6.166M6 11l-1 2.5M8 11l1 2.5m-5 0h6M9.5 2A1.5 1.5 0 1 1 11 3.5v1"></svg:path><svg:path d="M11 7a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDesktopHelpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDeviceDatabaseEncryption1Icon],svg[streamline-device-database-encryption-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.646 5.406v3.15M.646.5v3.15m0 6.663v3.15M6.777.5v3.15M8.654.5v3.15M2.62 5.406v3.15m.017-6.882a1.174 1.174 0 1 1 2.349 0v.783a1.174 1.174 0 0 1-2.35 0zM4.415 6.58a1.174 1.174 0 0 1 2.349 0v.783a1.174 1.174 0 1 1-2.349 0v-.782Zm-1.778 4.925a1.174 1.174 0 0 1 2.349 0v.783a1.174 1.174 0 0 1-2.35 0zM8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path>`,
})
export class StreamlineDeviceDatabaseEncryption1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDhammajakIcon],svg[streamline-dhammajak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.594V.625m0 12.75V8.406M8.406 7h4.969M.625 7h4.969m2.4-.994l3.514-3.514m-9.016 9.016l3.514-3.514m1.988 0l3.514 3.514M2.492 2.492l3.514 3.514M.615 7a6.385 6.385 0 1 0 12.77 0A6.385 6.385 0 1 0 .615 7"></svg:path><svg:path d="M5.594 7a1.406 1.406 0 1 0 2.812 0a1.406 1.406 0 1 0-2.812 0"></svg:path></svg:g>`,
})
export class StreamlineDhammajakIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamond2Icon],svg[streamline-diamond-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.638 1.54H3.362a1.07 1.07 0 0 0-.85.46L.692 4.52a1.05 1.05 0 0 0 .06 1.29L6.21 12.1a1 1 0 0 0 1.58 0l5.457-6.29a1.05 1.05 0 0 0 .06-1.29L11.488 2a1.07 1.07 0 0 0-.85-.46"></svg:path><svg:path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"></svg:path></svg:g>`,
})
export class StreamlineDiamond2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamondsSymbolIcon],svg[streamline-diamonds-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.092 6.398L6.13.933a1.092 1.092 0 0 1 1.742 0l4.037 5.465c.266.36.266.844 0 1.204L7.87 13.066a1.092 1.092 0 0 1-1.742 0L2.092 7.602a1.01 1.01 0 0 1 0-1.204"></svg:path>`,
})
export class StreamlineDiamondsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice1Icon],svg[streamline-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M6.5 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice2Icon],svg[streamline-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M9 4.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-5 5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice3Icon],svg[streamline-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M9.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6 6a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m3-3a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice4Icon],svg[streamline-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M9.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m6 6a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice5Icon],svg[streamline-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M9.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m6 6a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m3-3a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice5Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDice6Icon],svg[streamline-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M9 3.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m5 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0M9 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-5 3.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0M4 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice6Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDicesEntertainmentGamingDicesIcon],svg[streamline-dices-entertainment-gaming-dices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.929 3.286V1.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v5.429a1 1 0 0 0 1 1h1.786m3.785-1.858H12.5s1 0 1 1V12.5s0 1-1 1H7.071s-1 0-1-1V7.071s0-1 1-1"></svg:path><svg:path d="M8.654 11.166a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M3.221 3.505a.25.25 0 0 1 0-.5"></svg:path><svg:path d="M3.22 3.505a.25.25 0 0 0 0-.5m7.699 6.1a.25.25 0 0 1 0-.5"></svg:path><svg:path d="M10.918 9.105a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDicesEntertainmentGamingDicesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDictionaryLanguageBookIcon],svg[streamline-dictionary-language-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 13.5H3a1.5 1.5 0 1 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3a1.5 1.5 0 0 0-1.5 1.46v10m10-1.46v3"></svg:path><svg:path d="M8.051 5.002h2.316l-2.46 3.473h2.604M3.512 5.986l1.066-3.199a.4.4 0 0 1 .38-.274v0c.173 0 .327.11.382.274l1.066 3.199M3.898 4.828H6.02"></svg:path></svg:g>`,
})
export class StreamlineDictionaryLanguageBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDisableBellNotificationIcon],svg[streamline-disable-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 13.499l-13-13m10 9.996H13c-.442 0-.757-.175-1.07-.488a1.67 1.67 0 0 1-.487-1.178V4.942a4.443 4.443 0 0 0-8.42-1.979M6 13.501h2M2.557 5.499v3.33c0 .442-.175.866-.488 1.178c-.312.313-.627.488-1.069.488h6.5"></svg:path>`,
})
export class StreamlineDisableBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDisableHeartIcon],svg[streamline-disable-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 10.903l-.571.53a1 1 0 0 1-1.36.001L2.404 7.575c-.977-.954-1.095-2.23-.676-3.28M2.85 2.862c1.121-.78 2.785-.765 4.4 1.063c3.649-4.134 7.557 1.002 4.844 3.65L9.749 9.742M.5.5l13 13"></svg:path>`,
})
export class StreamlineDisableHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscordIcon],svg[streamline-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4.112 6.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m4.5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.858 9.864c0-2.401.858-5.574 1.715-6.861c0 0 .858-.429 4.289-.429s4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716l-1.51-1.886a6.6 6.6 0 0 1-2.985 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.86 9.007c.261.261.81.523 1.509.687a6.6 6.6 0 0 0 2.986 0c.699-.164 1.247-.426 1.509-.687"></svg:path></svg:g>`,
})
export class StreamlineDiscordIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentBadgeIcon],svg[streamline-discount-percent-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.83.998a1.895 1.895 0 0 1 2.392 0l.333.271l.423-.068a1.895 1.895 0 0 1 2.072 1.196l.152.4l.401.153A1.895 1.895 0 0 1 12.8 5.022l-.068.423l.27.333a1.895 1.895 0 0 1 0 2.392l-.27.333l.068.423a1.895 1.895 0 0 1-1.196 2.072l-.4.153l-.153.4a1.895 1.895 0 0 1-2.072 1.196l-.423-.068l-.333.271a1.895 1.895 0 0 1-2.392 0l-.333-.27l-.423.067a1.895 1.895 0 0 1-2.072-1.196l-.153-.4l-.4-.153a1.895 1.895 0 0 1-1.196-2.072l.068-.423l-.271-.333a1.895 1.895 0 0 1 0-2.392l.27-.333l-.067-.423A1.895 1.895 0 0 1 2.449 2.95l.4-.152l.153-.401A1.895 1.895 0 0 1 5.074 1.2l.423.068zM4.526 9.474l5-5"></svg:path><svg:path d="M5.026 5.474a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineDiscountPercentBadgeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCircleIcon],svg[streamline-discount-percent-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-2.5-4l5-5"></svg:path><svg:path d="M5 5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineDiscountPercentCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCouponIcon],svg[streamline-discount-percent-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11a1 1 0 0 0 .998 1h11.004a1 1 0 0 0 .998-1V8.966a2.037 2.037 0 0 1 0-3.932V3a1 1 0 0 0-.998-1H1.498A1 1 0 0 0 .5 3v2.03a2.037 2.037 0 0 1 0 3.94zm4.02-1.5l5-5"></svg:path><svg:path d="M5.02 5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineDiscountPercentCouponIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCutoutIcon],svg[streamline-discount-percent-cutout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 9.5l5-5m-5 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3-9.5a1 1 0 0 1 1 1m-13 0a1 1 0 0 1 1-1m0 13a1 1 0 0 1-1-1m13 0a1 1 0 0 1-1 1m-8-13h1m3 0h1m-5 13h1m3 0h1m4-9v1m0 3v1m-13-5v1m0 3v1"></svg:path>`,
})
export class StreamlineDiscountPercentCutoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentFireIcon],svg[streamline-discount-percent-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.247 8.462c0-5.008-4.423-7.326-6.506-7.868c.78 1.95.737 3.393-.27 5.171a.478.478 0 0 1-.777.069l-1.28-1.452c-3.35 3.558-1.422 9.281 3.881 9.015c4.057-.25 4.952-2.952 4.952-4.935m-6.58 2.462L8.951 7.64"></svg:path><svg:path d="M6.065 8.118a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.659 3.329a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDiscountPercentFireIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscussionConverstionReplyIcon],svg[streamline-discussion-converstion-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.052 6.906V2.314a.845.845 0 0 1 .845-.845h8.22a.845.845 0 0 1 .845.845v.53M2.052 9.03v.965l-.845 2.535l3.38-.845h6.53a.845.845 0 0 0 .845-.845V4.875"></svg:path><svg:path d="M.65 5.612L2.038 7l1.388-1.388m7.148.636l1.388-1.388l1.388 1.388"></svg:path></svg:g>`,
})
export class StreamlineDiscussionConverstionReplyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDivisionCircleIcon],svg[streamline-division-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5M4.044 7.006h5.977"></svg:path><svg:path d="M7 4.386a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0 6.239a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDivisionCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDnaIcon],svg[streamline-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.1 3.9a4.65 4.65 0 0 0 3.4.1M4 13.5a4.68 4.68 0 0 0-.1-3.41a4.74 4.74 0 0 1 1-5.16a4.8 4.8 0 0 1 2.46-1.3"></svg:path><svg:path d="M6.6 10.37a4.8 4.8 0 0 0 2.47-1.31a4.73 4.73 0 0 0 1-5.16A4.65 4.65 0 0 1 10 .5M.5 10a4.6 4.6 0 0 1 3.4.11m1.04-5.18l4.13 4.13"></svg:path></svg:g>`,
})
export class StreamlineDnaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDollarCoinIcon],svg[streamline-dollar-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M8.702 5.222a1.33 1.33 0 0 0-1.258-.889H6.412a1.19 1.19 0 0 0-.254 2.353l1.571.344a1.334 1.334 0 0 1-.285 2.637h-.888a1.33 1.33 0 0 1-1.258-.89M7 4.333V3m0 8V9.666"></svg:path></svg:g>`,
})
export class StreamlineDollarCoinIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDollarCoin1Icon],svg[streamline-dollar-coin-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.806 4.24a1.02 1.02 0 0 0-.961-.68h-.79a.91.91 0 0 0-.194 1.798l1.202.263a1.02 1.02 0 0 1-.218 2.016h-.68a1.02 1.02 0 0 1-.961-.68M8.505 3.56V2.54m0 6.116v-1.02"></svg:path><svg:path d="M3.614 5.598a4.891 4.891 0 1 0 9.782 0a4.891 4.891 0 1 0-9.782 0m-2.411.536a4.89 4.89 0 0 0 6.437 6.73"></svg:path></svg:g>`,
})
export class StreamlineDollarCoin1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDonutIcon],svg[streamline-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5-.5l-.5 1M3 9l1 1m4-7.5l1 1"></svg:path><svg:path d="M3.5 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5 7a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDonutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadBox1Icon],svg[streamline-download-box-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1"></svg:path><svg:path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13zM7 .5v4"></svg:path></svg:g>`,
})
export class StreamlineDownloadBox1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadCircleIcon],svg[streamline-download-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 8L7 10.5L9.5 8M7 10.5v-7"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path></svg:g>`,
})
export class StreamlineDownloadCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadComputerIcon],svg[streamline-download-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v6m-2-2l2 2l2-2"></svg:path><svg:path d="M9.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h3.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path></svg:g>`,
})
export class StreamlineDownloadComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadFileIcon],svg[streamline-download-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="m9 8l-2 2l-2-2m2 2V4.5"></svg:path></svg:g>`,
})
export class StreamlineDownloadFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDressingTableIcon],svg[streamline-dressing-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7.5v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5M.5 7.5h13M7 7.5v6M9.5 10v1m-5-1v1M12 7.5v-2a5 5 0 0 0-10 0v2"></svg:path>`,
})
export class StreamlineDressingTableIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDroneIcon],svg[streamline-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 1h4m5 0h4m-11 0v3m9-3v3m2 0H.5v1a2 2 0 0 0 2 2h1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3h1a2 2 0 0 0 2-2zm-10 3h7"></svg:path><svg:path d="M4 8.65A4.48 4.48 0 0 0 2.5 12v1h1M10 8.65A4.48 4.48 0 0 1 11.5 12v1h-1"></svg:path></svg:g>`,
})
export class StreamlineDroneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineDropboxIcon],svg[streamline-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.976 11.643l2.026 1.388l2.026-1.388M7 8.58l3.213-2.201l3.212 2.201l-3.212 2.201zm0-4.406l3.213-2.201l3.212 2.2l-3.212 2.202zM.575 8.58l3.212-2.2L7 8.58l-3.212 2.201zm0-4.406l3.212-2.201L7 4.173L3.787 6.376z"></svg:path>`,
})
export class StreamlineDropboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEarHearingIcon],svg[streamline-ear-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.54 3.19C.854 2.292 2.09.5 4.517.5c3.035 0 4.777 2.58 4.245 4.995c-.46 2.094-1.767 2.824-2.343 3.323c-.842.73-.842 1.325-1.147 2.288c-.177.557-.79 1.351-1.646 1.45c-.62.07-1.365-.225-2.164-1.24M13.5 9.786A3.714 3.714 0 0 1 9.786 13.5m1.997-3.784a1.997 1.997 0 0 1-1.997 1.997m.336-2.553a.93.93 0 0 1-.928.928"></svg:path><svg:path d="M2.346 4.496c.182-.45.83-1.326 1.97-1.24c1.14.085 2.118 1.24 1.715 2.31c-.404 1.072-.937.74-1.422 1.46c-.485.721-.304 2.167-1.383 2.383c-.672.134-1.026-.252-1.026-.252"></svg:path></svg:g>`,
})
export class StreamlineEarHearingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEarpodsIcon],svg[streamline-earpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5a3 3 0 0 1 2 .76v4.48a3 3 0 0 1-2 .76a3 3 0 0 1-.5 0v5.75a1.25 1.25 0 0 1-2.5 0V3.5a3 3 0 0 1 3-3m-9 0a3 3 0 0 0-2 .76v4.48a3 3 0 0 0 2 .76q.25.022.5 0v5.75a1.25 1.25 0 0 0 2.5 0V3.5a3 3 0 0 0-3-3"></svg:path>`,
})
export class StreamlineEarpodsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEarth1Icon],svg[streamline-earth-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M1 9.5h1.75A1.75 1.75 0 0 0 4.5 7.75v-1.5A1.75 1.75 0 0 1 6.25 4.5A1.75 1.75 0 0 0 8 2.75V.57m5.5 6.33a3.56 3.56 0 0 0-1.62-.4H9.75a1.75 1.75 0 1 0 0 3.5A1.25 1.25 0 0 1 11 11.25v.87"></svg:path></svg:g>`,
})
export class StreamlineEarth1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEarthAirplaneIcon],svg[streamline-earth-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 8.5a5 5 0 1 1-8.25-3.8"></svg:path><svg:path d="M5.28 6.65a1.6 1.6 0 0 0-.046 1.287a1.52 1.52 0 0 0 1.416.943a.77.77 0 0 1 .77.77v3.47M.57 9.27h1.85A1.54 1.54 0 0 1 4 10.81v2.45m9.26-11.29l-1-.34a.34.34 0 0 0-.39.13l-.73 1.13l-4-2A2.49 2.49 0 0 0 3.53 2.2a.68.68 0 0 0 .47.9l2.61.84l.26.09l.49 1.68a.36.36 0 0 0 .24.25l1.18.38a.37.37 0 0 0 .48-.41L9 4.68h.17l2.55.83a.67.67 0 0 0 .85-.41l.9-2.77a.34.34 0 0 0-.21-.36"></svg:path></svg:g>`,
})
export class StreamlineEarthAirplaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEcologySciencePlanetSolarSystemRingPlanetSaturnSpaceAstronomyIcon],svg[streamline-ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.63 8.13C.85 10.49.05 12.53.76 13.24c1 1 4.6-1 8-4.44s5.44-7 4.44-8c-.64-.65-2.38 0-4.47 1.41"></svg:path><svg:path d="M12.05 4.92A5 5 0 0 1 7.5 12a5.06 5.06 0 0 1-1.95-.39M3.5 10a5 5 0 0 1 7-7"></svg:path></svg:g>`,
})
export class StreamlineEcologySciencePlanetSolarSystemRingPlanetSaturnSpaceAstronomyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEcologyScienceTestTubeExperimentLabScienceChemistryTestTubeSolutionIcon],svg[streamline-ecology-science-test-tube-experiment-lab-science-chemistry-test-tube-solution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h9M10 .5v10a3 3 0 0 1-6 0V.5"></svg:path>`,
})
export class StreamlineEcologyScienceTestTubeExperimentLabScienceChemistryTestTubeSolutionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEditImagePhotoIcon],svg[streamline-edit-image-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 8.5l-4.71 4.71l-2.13.29l.3-2.13l4.7-4.71zm-9.219 5H1.8a1.3 1.3 0 0 1-1.3-1.3V1.8A1.3 1.3 0 0 1 1.8.5h10.4a1.3 1.3 0 0 1 1.3 1.3v2.95"></svg:path><svg:path d="M9.014 4.795a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M.5 7.164a10.3 10.3 0 0 1 6.5.961"></svg:path></svg:g>`,
})
export class StreamlineEditImagePhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEjectIcon],svg[streamline-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 11.5h11m-1.293-3H2.793c-.873 0-1.327-1.04-.733-1.68l4.207-4.53a1 1 0 0 1 1.466 0l4.207 4.53c.594.64.14 1.68-.733 1.68"></svg:path>`,
})
export class StreamlineEjectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineElectricCord1Icon],svg[streamline-electric-cord-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.94 10.952H5.06a3 3 0 0 1-3-3V5.036a1 1 0 0 1 1-1h7.88a1 1 0 0 1 1 1v2.916a3 3 0 0 1-3 3M4.53 4.036V.578m4.94 3.458V.578M7 10.952v2.47"></svg:path>`,
})
export class StreamlineElectricCord1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineElectricCord3Icon],svg[streamline-electric-cord-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.122 5.698h5.756v1.55a2.878 2.878 0 1 1-5.756 0zm1.316 0V3.354m3.125 2.344V3.354"></svg:path><svg:path d="M7 10.125v2.125c0 .552.45 1.008.996.921A6.252 6.252 0 0 0 7 .75a6.25 6.25 0 0 0-3.125 11.664"></svg:path></svg:g>`,
})
export class StreamlineElectricCord3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEmergencyExitIcon],svg[streamline-emergency-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.214 1.643c0-.493.4-.893.893-.893h6.25c.493 0 .893.4.893.893v10.714c0 .493-.4.893-.893.893H9.232"></svg:path><svg:path d="M6.553 5.438a1.563 1.563 0 1 0 3.126 0a1.563 1.563 0 1 0-3.126 0m-4.017.669h1.818a1 1 0 0 1 .707.293L7.6 8.94a1 1 0 0 0 .707.292h1.371"></svg:path><svg:path d="M6.107 7.446L3.721 9.832a1 1 0 0 1-.707.293H.75"></svg:path><svg:path d="m4.321 9.232l1.493 1.493a1 1 0 0 1 .293.707v1.818"></svg:path></svg:g>`,
})
export class StreamlineEmergencyExitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEmptyClipboardIcon],svg[streamline-empty-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path></svg:g>`,
})
export class StreamlineEmptyClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentCameraVideoFilmTelevisionTvCameraMoviesVideoRecorderIcon],svg[streamline-entertainment-camera-video-film-television-tv-camera-movies-video-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.5" cy="3.5" r="3"></svg:circle><svg:circle cx="10.5" cy="4.5" r="2"></svg:circle><svg:rect width="7.5" height="4.5" x="3.5" y="9" rx="1"></svg:rect><svg:path d="M13.5 10v2.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentCameraVideoFilmTelevisionTvCameraMoviesVideoRecorderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonFastForward1ButtonControlsFastForwardMoviesTelevisionVideoTvIcon],svg[streamline-entertainment-control-button-fast-forward-1-button-controls-fast-forward-movies-television-video-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62Z"></svg:path><svg:path d="M7 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L8.1 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6Z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonFastForward1ButtonControlsFastForwardMoviesTelevisionVideoTvIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonFastForward2ButtonControlsFastForwardMoviesTelevisionVideoTvIcon],svg[streamline-entertainment-control-button-fast-forward-2-button-controls-fast-forward-movies-television-video-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62Z"></svg:path><svg:path d="M7 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L8.1 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6Zm6.5-7.79v9"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonFastForward2ButtonControlsFastForwardMoviesTelevisionVideoTvIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonMoveCircleMoveButtonCircleDirectionArrowsIcon],svg[streamline-entertainment-control-button-move-circle-move-button-circle-direction-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M5.5 4L7 3l1.5 1m-3 6L7 11l1.5-1M10 5.5L11 7l-1 1.5m-6-3L3 7l1 1.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonMoveCircleMoveButtonCircleDirectionArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonNextButtonTelevisionButtonsMoviesSkipNextVideoControlsIcon],svg[streamline-entertainment-control-button-next-button-television-buttons-movies-skip-next-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v13m-13-1.84a1 1 0 0 0 .52.88a1 1 0 0 0 1 0l7.19-4.7a1 1 0 0 0 0-1.68L2 1.5a1 1 0 0 0-1 0a1 1 0 0 0-.52.88Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonNextButtonTelevisionButtonsMoviesSkipNextVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonNextCircleCircleMultiMultimediaButtonSkipMediaNextControlsIcon],svg[streamline-entertainment-control-button-next-circle-circle-multi-multimedia-button-skip-media-next-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M9.5 5v4m-5-4.5l3 2.5l-3 2.5v-5z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonNextCircleCircleMultiMultimediaButtonSkipMediaNextControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPause1ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon],svg[streamline-entertainment-control-button-pause-1-button-television-buttons-movies-tv-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75.52v13m4.5-13v13"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPause1ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPause2ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon],svg[streamline-entertainment-control-button-pause-2-button-television-buttons-movies-tv-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="4.5" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:rect width="4.5" height="13" x="9" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPause2ButtonTelevisionButtonsMoviesTvPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPauseCircleControlsPauseMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-pause-circle-controls-pause-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M5.5 4.5v5m3-5v5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPauseCircleControlsPauseMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayButtonTelevisionButtonsMoviesPlayTvVideoControlsIcon],svg[streamline-entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.35a1.14 1.14 0 0 0 .63 1a1.24 1.24 0 0 0 1.22 0L12 8a1.11 1.11 0 0 0 0-2L3.35.69a1.24 1.24 0 0 0-1.22 0a1.14 1.14 0 0 0-.63 1Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPlayButtonTelevisionButtonsMoviesPlayTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayCircleControlsMediaMultiPlayMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-play-circle-controls-media-multi-play-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m5.5 4.5l4 2.5l-4 2.5v-5z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPlayCircleControlsMediaMultiPlayMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayPauseButtonTelevisionButtonsMoviesPlayPauseVideoControlsIcon],svg[streamline-entertainment-control-button-play-pause-button-television-buttons-movies-play-pause-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5v9m-3-9v9m-10-1.21a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPlayPauseButtonTelevisionButtonsMoviesPlayPauseVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPower1PowerButtonOnOffIcon],svg[streamline-entertainment-control-button-power-1-power-button-on-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5V6m4-4.12a6.5 6.5 0 1 1-8 0"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPower1PowerButtonOnOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPower2PowerButtonOnOffIcon],svg[streamline-entertainment-control-button-power-2-power-button-on-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 4.5v5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPower2PowerButtonOnOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPreviousButtonTelevisionButtonsMoviesSkipPreviousVideoControlsIcon],svg[streamline-entertainment-control-button-previous-button-television-buttons-movies-skip-previous-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v13m13-1.84a1 1 0 0 1-.52.88a1 1 0 0 1-1 0l-7.19-4.7a1 1 0 0 1 0-1.68L12 1.5a1 1 0 0 1 1 0a1 1 0 0 1 .52.88Z"></svg:path>`,
})
export class StreamlineEntertainmentControlButtonPreviousButtonTelevisionButtonsMoviesSkipPreviousVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPreviousCirclePreviousControlsMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-previous-circle-previous-controls-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M4.5 5v4m5-4.5L6.5 7l3 2.5v-5z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPreviousCirclePreviousControlsMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonRecord1ButtonMultimediaMultiMediaControlsRecordCircleIcon],svg[streamline-entertainment-control-button-record-1-button-multimedia-multi-media-controls-record-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r="2.5"></svg:circle></svg:g>`,
})
export class StreamlineEntertainmentControlButtonRecord1ButtonMultimediaMultiMediaControlsRecordCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonRecord3ButtonTelevisionButtonsMoviesRecordTvVideoControlsIcon],svg[streamline-entertainment-control-button-record-3-button-television-buttons-movies-record-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class StreamlineEntertainmentControlButtonRecord3ButtonTelevisionButtonsMoviesRecordTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonRewind1RewindTelevisionButtonMoviesButtonsTvVideoControlsIcon],svg[streamline-entertainment-control-button-rewind-1-rewind-television-button-movies-buttons-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62Z"></svg:path><svg:path d="M7 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.82 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6Z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonRewind1RewindTelevisionButtonMoviesButtonsTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonRewind2RewindTelevisionButtonMoviesButtonsTvVideoControlsIcon],svg[streamline-entertainment-control-button-rewind-2-rewind-television-button-movies-buttons-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62Z"></svg:path><svg:path d="M7 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.82 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6ZM.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonRewind2RewindTelevisionButtonMoviesButtonsTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonStopButtonTelevisionButtonsMoviesStopTvVideoControlsIcon],svg[streamline-entertainment-control-button-stop-button-television-buttons-movies-stop-tv-video-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x=".5" y=".52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class StreamlineEntertainmentControlButtonStopButtonTelevisionButtonsMoviesStopTvVideoControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonStopCircleStopControlsMultiMediaMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-stop-circle-stop-controls-multi-media-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:rect width="5" height="5" x="4.5" y="4.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineEntertainmentControlButtonStopCircleStopControlsMultiMediaMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentEarpodsAirpodsAudioEarpodsMusicEarbudsTrueWirelessIcon],svg[streamline-entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5a3 3 0 0 0-2 .76v4.48a3 3 0 0 0 2 .76a2.74 2.74 0 0 0 .5 0v5.79a1.25 1.25 0 0 0 2.5 0V3.5a3 3 0 0 0-3-3Zm9 0a3 3 0 0 1 2 .76v4.48a3 3 0 0 1-2 .76a2.74 2.74 0 0 1-.5 0v5.79a1.25 1.25 0 0 1-2.5 0V3.5a3 3 0 0 1 3-3Z"></svg:path>`,
})
export class StreamlineEntertainmentEarpodsAirpodsAudioEarpodsMusicEarbudsTrueWirelessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentMusicNote1MusicAudioNoteIcon],svg[streamline-entertainment-music-note-1-music-audio-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.25" cy="11" r="2.5"></svg:circle><svg:path d="M6.75 11V.5h0a5.5 5.5 0 0 1 5.5 5.5h0"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentMusicNote1MusicAudioNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentMusicNote2MusicAudioNoteIcon],svg[streamline-entertainment-music-note-2-music-audio-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="11.42" r="2"></svg:circle><svg:circle cx="11.5" cy="8.92" r="2"></svg:circle><svg:path d="M13.5 8.92V1.08a.5.5 0 0 0-.63-.48l-8 2.22a.5.5 0 0 0-.37.48v8.12m0-5.5l9-2.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentMusicNote2MusicAudioNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentNewsPaperNewspaperPeriodicalFoldContentIcon],svg[streamline-entertainment-news-paper-newspaper-periodical-fold-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 4.5V11a1.25 1.25 0 0 1-1.25 1.25h0A1.25 1.25 0 0 1 11 11h0V2.25a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v9a1 1 0 0 0 1 1h10.75"></svg:path><svg:path d="M3.5 4.25H8v2.5H3.5zm0 5.5H8"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentNewsPaperNewspaperPeriodicalFoldContentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPartyPopperHobbyEntertainmentPartyPopperConfettiEventIcon],svg[streamline-entertainment-party-popper-hobby-entertainment-party-popper-confetti-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.85 13.2l-6.68-2.49a1.25 1.25 0 0 1-.48-2.05l4.19-4.19a1.26 1.26 0 0 1 2.06.53l2.48 6.68a1.22 1.22 0 0 1-1.57 1.52Zm-9.8-6.07a2.06 2.06 0 0 1 1.46-.21m.82-2.64A2.1 2.1 0 0 1 4 2.83M6.63.72A4.72 4.72 0 0 0 6.76 4"></svg:path><svg:circle cx="1" cy="3.28" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineEntertainmentPartyPopperHobbyEntertainmentPartyPopperConfettiEventIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList1ScreenTelevisionDisplayPlayerMoviesMovieTvMediaPlayersVideoIcon],svg[streamline-entertainment-play-list-1-screen-television-display-player-movies-movie-tv-media-players-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.49 10.56V6.73A.36.36 0 0 1 6 6.42l3.32 1.91a.37.37 0 0 1 0 .63L6 10.88a.37.37 0 0 1-.51-.32ZM.5 4h13M4 4L5.5.5m3 3.5L10 .5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList1ScreenTelevisionDisplayPlayerMoviesMovieTvMediaPlayersVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList2PlayerTelevisionMoviesSliderMediaTvPlayersVideoIcon],svg[streamline-entertainment-play-list-2-player-television-movies-slider-media-tv-players-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 8.68V5.32c0-.25.23-.4.41-.28l2.45 1.68a.35.35 0 0 1 0 .56L5.91 9c-.18.08-.41-.07-.41-.32Z"></svg:path><svg:rect width="8" height="11" x="3" y="1.5" rx="1"></svg:rect><svg:path d="M.5 3v8m13-8v8"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList2PlayerTelevisionMoviesSliderMediaTvPlayersVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList3PlayerTelevisionDisplayMoviesSmartphoneMediaTvPlayersScreenVideoIcon],svg[streamline-entertainment-play-list-3-player-television-display-movies-smartphone-media-tv-players-screen-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8.5" height="13" x="2.75" y=".5" rx="1"></svg:rect><svg:path d="M5.27 7.14V3.82a.31.31 0 0 1 .47-.28l2.85 1.67a.31.31 0 0 1 0 .54L5.74 7.41a.31.31 0 0 1-.47-.27ZM2.75 10.5h8.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList3PlayerTelevisionDisplayMoviesSmartphoneMediaTvPlayersScreenVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentPlayList4ScreenTelevisionDisplayPlayerMoviesPlayersTvMediaVideoIcon],svg[streamline-entertainment-play-list-4-screen-television-display-player-movies-players-tv-media-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5.23 9.23V4.91a.41.41 0 0 1 .62-.35l3.7 2.15a.41.41 0 0 1 0 .71l-3.7 2.16a.41.41 0 0 1-.62-.35Z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentPlayList4ScreenTelevisionDisplayPlayerMoviesPlayersTvMediaVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentRadioAntennaAudioMusicRadioIcon],svg[streamline-entertainment-radio-antenna-audio-music-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9.5" x=".5" y="4" rx="1"></svg:rect><svg:path d="M2 4L13.5.5"></svg:path><svg:circle cx="4.5" cy="10" r="1.5"></svg:circle><svg:path d="M9.5 8.75H11m-1.5 2.5H11M.5 6.5h13"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentRadioAntennaAudioMusicRadioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentRecordingTape1FilmTelevisionTvMoviesReelVideoIcon],svg[streamline-entertainment-recording-tape-1-film-television-tv-movies-reel-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:circle cx="5.5" cy="5.5" r="1.5"></svg:circle><svg:path d="M10.5 5.5V12a1.5 1.5 0 0 0 1.5 1.5h0a1.5 1.5 0 0 0 1.5-1.5v-.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentRecordingTape1FilmTelevisionTvMoviesReelVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentRecordingTape2PhoneDeviceMailMobileFaxVoiceMachineAnsweringIcon],svg[streamline-entertainment-recording-tape-2-phone-device-mail-mobile-fax-voice-machine-answering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3" cy="7" r="2.5"></svg:circle><svg:circle cx="11" cy="7" r="2.5"></svg:circle><svg:path d="M3 9.5h8"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentRecordingTape2PhoneDeviceMailMobileFaxVoiceMachineAnsweringIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentSpeaker1SpeakerMusicAudioSubwooferIcon],svg[streamline-entertainment-speaker-1-speaker-music-audio-subwoofer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.43 3.43a1.5 1.5 0 1 0-1.86-1.86a6.49 6.49 0 0 0-7.14 0a1.5 1.5 0 1 0-1.86 1.86A6.52 6.52 0 0 0 .5 7a6.43 6.43 0 0 0 .83 3.17A1.49 1.49 0 0 0 2 13a1.51 1.51 0 0 0 1.26-.69a6.47 6.47 0 0 0 7.48 0a1.5 1.5 0 0 0 2.76-.81a1.49 1.49 0 0 0-.83-1.33A6.43 6.43 0 0 0 13.5 7a6.52 6.52 0 0 0-1.07-3.57Z"></svg:path><svg:circle cx="7" cy="7" r="3.5"></svg:circle><svg:circle cx="7" cy="7" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineEntertainmentSpeaker1SpeakerMusicAudioSubwooferIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentSpeaker2SpeakersMusicAudioIcon],svg[streamline-entertainment-speaker-2-speakers-music-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="13" x="2" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="9" r="2.5"></svg:circle><svg:circle cx="7" cy="3.5" r=".5"></svg:circle><svg:circle cx="7" cy="9" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineEntertainmentSpeaker2SpeakersMusicAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentTicketHobbyTicketEventEntertainmentStubTheaterIcon],svg[streamline-entertainment-ticket-hobby-ticket-event-entertainment-stub-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.65 2.24l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92L1.13 3a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1L8.9.85a.89.89 0 0 0-1.16.47L4.38 9.23l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94A.89.89 0 0 0 13 2.58Z"></svg:path>`,
})
export class StreamlineEntertainmentTicketHobbyTicketEventEntertainmentStubTheaterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeDownSpeakerDownVolumeControlAudioMusicDecreaseIcon],svg[streamline-entertainment-volume-down-speaker-down-volume-control-audio-music-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5m7.5 1.5h3"></svg:path>`,
})
export class StreamlineEntertainmentVolumeDownSpeakerDownVolumeControlAudioMusicDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeLevelHighSpeakerHighVolumeControlAudioMusicIcon],svg[streamline-entertainment-volume-level-high-speaker-high-volume-control-audio-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5m9.5-1a4.38 4.38 0 0 1 1 3a6.92 6.92 0 0 1-1 3.5m-2-5A2.19 2.19 0 0 1 11 7a2.19 2.19 0 0 1-.5 1.5"></svg:path>`,
})
export class StreamlineEntertainmentVolumeLevelHighSpeakerHighVolumeControlAudioMusicIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeLevelLowVolumeSpeakerLowerDownControlMusicLowAudioIcon],svg[streamline-entertainment-volume-level-low-volume-speaker-lower-down-control-music-low-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5m7.5.5A2.19 2.19 0 0 1 11 7a2.19 2.19 0 0 1-.5 1.5"></svg:path>`,
})
export class StreamlineEntertainmentVolumeLevelLowVolumeSpeakerLowerDownControlMusicLowAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeLevelOffVolumeSpeakerControlMusicAudioIcon],svg[streamline-entertainment-volume-level-off-volume-speaker-control-music-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5"></svg:path>`,
})
export class StreamlineEntertainmentVolumeLevelOffVolumeSpeakerControlMusicAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeMuteSpeakerRemoveVolumeControlAudioMusicMuteOffIcon],svg[streamline-entertainment-volume-mute-speaker-remove-volume-control-audio-music-mute-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5m10.5.5l-3 3m0-3l3 3"></svg:path>`,
})
export class StreamlineEntertainmentVolumeMuteSpeakerRemoveVolumeControlAudioMusicMuteOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeOffSpeakerMusicMuteVolumeControlAudioOffMuteIcon],svg[streamline-entertainment-volume-off-speaker-music-mute-volume-control-audio-off-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M4.5 5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5ZM10 4V3a1 1 0 0 0-.55-.89a1 1 0 0 0-1 .08L4.5 5m2.17 5.56l1.74 1.25a1 1 0 0 0 1 .08A1 1 0 0 0 10 11V7M4.5 9l.29.21"></svg:path>`,
})
export class StreamlineEntertainmentVolumeOffSpeakerMusicMuteVolumeControlAudioOffMuteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentVolumeUpVolumeSpeakerUpControlMusicPlusAddAudioIncreaseIcon],svg[streamline-entertainment-volume-up-volume-speaker-up-control-music-plus-add-audio-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 5v3m-1.5-1.5h3M3 5H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H3Zm0 4l3.91 2.81a1 1 0 0 0 1 .08A1 1 0 0 0 8.5 11V3a1 1 0 0 0-.5-.89a1 1 0 0 0-1 .08L3 5"></svg:path>`,
})
export class StreamlineEntertainmentVolumeUpVolumeSpeakerUpControlMusicPlusAddAudioIncreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentWalkManPlayerTapesTapeHeadphonesMusicWalkmanHeadsetAudioIcon],svg[streamline-entertainment-walk-man-player-tapes-tape-headphones-music-walkman-headset-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="7" x="4.5" y="6.5" rx="1"></svg:rect><svg:path d="M2 7.5v3m10-3v3m-10-2H1A.5.5 0 0 1 .5 8V7A6.5 6.5 0 0 1 7 .5h0A6.5 6.5 0 0 1 13.5 7v1a.5.5 0 0 1-.5.5h-1M7 9v1"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentWalkManPlayerTapesTapeHeadphonesMusicWalkmanHeadsetAudioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEpicGames1Icon],svg[streamline-epic-games-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.223 1.429c0-.513.37-.929.825-.929h9.903c.456 0 .826.416.826.929v8.247c0 .352-.177.673-.456.83L7 13.5l-5.32-2.993c-.28-.158-.457-.48-.457-.83z"></svg:path><svg:path d="M8.394 7.202H5.61V2.56h2.785M5.609 4.88h2.785M5.143 9.457l1.858.929l1.857-.929"></svg:path></svg:g>`,
})
export class StreamlineEpicGames1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEqualSignIcon],svg[streamline-equal-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.75 4.5h12.5m-12.5 5h12.5"></svg:path>`,
})
export class StreamlineEqualSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineErlenmeyerFlaskIcon],svg[streamline-erlenmeyer-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 .5v6l3.59 4.57a1.5 1.5 0 0 1-1.18 2.43H2.59a1.5 1.5 0 0 1-1.18-2.43L5 6.5v-6M3.5.5h7"></svg:path>`,
})
export class StreamlineErlenmeyerFlaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEsportsIcon],svg[streamline-esports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.32 6.536c.638 1.544 1.197 3.545 1.18 4.643c-.024 1.48-.928 2.32-1.857 2.32c-.842-.395-1.858-2.32-2.785-2.32H5.142c-.927 0-1.943 1.925-2.786 2.32c-.928 0-1.832-.84-1.856-2.32c-.018-1.098.542-3.099 1.18-4.643m1.605-5.107v2.785a.93.93 0 0 0 .929.929h5.571a.93.93 0 0 0 .929-.929V1.43l-1.857.928L7 .5L5.142 2.357z"></svg:path><svg:path d="M3.5 8.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class StreamlineEsportsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumIcon],svg[streamline-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.17.573l4.738 6.432l-4.737 6.432l-4.738-6.432z"></svg:path><svg:path d="M11.908 7.005L7.17 8.578L2.433 7.005"></svg:path></svg:g>`,
})
export class StreamlineEthereumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumCircleIcon],svg[streamline-ethereum-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 3L4.5 6L7 8l2.5-2zM4.5 9L7 11l2.5-2"></svg:path></svg:g>`,
})
export class StreamlineEthereumCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
